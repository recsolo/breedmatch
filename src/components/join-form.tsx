"use client";

import { useState } from "react";
import { NETWORK_INTERESTS, TIMELINES } from "@/lib/waitlist";

type Role = "breeder" | "buyer";
type Status = { state: "idle" } | { state: "sending" } | { state: "done" } | { state: "error"; message: string };

const inputClass =
  "mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2.5 outline-none focus:border-accent";

export function JoinForm({ initialRole }: { initialRole: Role }) {
  const [role, setRole] = useState<Role>(initialRole);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(form.entries()),
      role,
      network_interests: form.getAll("network_interests"),
    };

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ state: "error", message: data.error ?? "Something went wrong. Please try again." });
        return;
      }
      setStatus({ state: "done" });
    } catch {
      setStatus({ state: "error", message: "Couldn't reach the server. Check your connection and try again." });
    }
  }

  if (status.state === "done") {
    return (
      <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-2xl font-semibold">You&apos;re on the list.</p>
        <p className="mt-2 text-muted">
          {role === "breeder"
            ? "Your founding spot is saved. We'll email you when it's time to build your kennel profile."
            : "We'll email you as soon as breeders near you are live."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <div className="grid grid-cols-2 gap-2 rounded-full border border-border bg-surface p-1">
        {(["breeder", "buyer"] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            aria-pressed={role === r}
            className={`rounded-full py-2 text-sm font-medium ${
              role === r ? "bg-accent text-white" : "text-muted hover:text-foreground"
            }`}
          >
            {r === "breeder" ? "I'm a breeder" : "I'm looking for a puppy"}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required maxLength={120} autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          ZIP code
          <input
            name="zip"
            required
            inputMode="numeric"
            pattern="\d{5}"
            maxLength={5}
            autoComplete="postal-code"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium">
          {role === "breeder" ? "Breed(s) you raise" : "Breed(s) you're interested in"}
          <input name="breeds" required maxLength={300} placeholder="e.g. Golden Retriever" className={inputClass} />
        </label>
      </div>

      {role === "breeder" ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Kennel name <span className="font-normal text-muted">(optional)</span>
              <input name="kennel_name" maxLength={120} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Years breeding <span className="font-normal text-muted">(optional)</span>
              <input name="years_breeding" type="number" min={0} max={80} className={inputClass} />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Website or social page <span className="font-normal text-muted">(optional)</span>
            <input name="website" maxLength={300} placeholder="https://" className={inputClass} />
          </label>
          <fieldset>
            <legend className="text-sm font-medium">Open to networking for…</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {NETWORK_INTERESTS.map((interest) => (
                <label
                  key={interest}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent-soft"
                >
                  <input type="checkbox" name="network_interests" value={interest} className="accent-accent" />
                  {interest}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      ) : (
        <label className="block text-sm font-medium">
          When are you hoping to bring a puppy home?
          <select name="timeline" defaultValue="3-6 months" className={inputClass}>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t === "asap" ? "As soon as possible" : t === "just researching" ? "Just researching" : t}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="block text-sm font-medium">
        Anything else? <span className="font-normal text-muted">(optional)</span>
        <textarea name="notes" rows={3} maxLength={1000} className={inputClass} />
      </label>

      {/* Honeypot for bots — hidden from people and screen readers. */}
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status.state === "error" && (
        <p role="alert" className="rounded-xl bg-accent-soft px-4 py-3 text-sm text-accent-strong">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="w-full rounded-full bg-accent py-3 font-medium text-white hover:bg-accent-strong disabled:opacity-60"
      >
        {status.state === "sending"
          ? "Saving…"
          : role === "breeder"
            ? "Claim my founding spot"
            : "Join the buyer waitlist"}
      </button>
      <p className="text-center text-xs text-muted">
        BreedMatch is a connection platform only. No payment is collected to join the waitlist.
      </p>
    </form>
  );
}
