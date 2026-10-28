"use client";

import { useState } from "react";
import { HeartIcon, PawIcon } from "@/components/icons";
import { BREEDING_INTERESTS, NETWORK_INTERESTS, TIMELINES } from "@/lib/waitlist";

type Role = "breeder" | "buyer";
type Status = { state: "idle" } | { state: "sending" } | { state: "done" } | { state: "error"; message: string };

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/12 bg-white/5 px-3.5 py-2.5 text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent/60 focus:bg-white/8 focus:ring-2 focus:ring-accent/25";

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
      <div className="ring-grad glass mt-10 rounded-3xl p-10 text-center">
        <span
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--grad)", boxShadow: "0 0 30px -6px rgba(255,61,139,0.7)" }}
        >
          <HeartIcon className="h-7 w-7" fill="currentColor" stroke="none" />
        </span>
        <p className="mt-5 font-display text-2xl font-bold">You&apos;re on the list.</p>
        <p className="mt-2 text-muted">
          {role === "breeder"
            ? "Your founding spot is saved. We'll email you when it's time to build your kennel profile."
            : "We'll email you the moment breeders near you go live."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass mt-10 space-y-5 rounded-3xl p-6 sm:p-8">
      <div className="grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/5 p-1">
        {(["breeder", "buyer"] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            aria-pressed={role === r}
            className={`rounded-full py-2.5 text-sm font-semibold transition ${
              role === r ? "btn-3d" : "text-muted hover:text-foreground"
            }`}
          >
            {r === "breeder" ? "I'm a breeder" : "Looking for a puppy"}
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
          {role === "breeder" ? "Breed(s) you raise" : "Breed(s) you want"}
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
            <legend className="text-sm font-medium">Stud &amp; dam matching</legend>
            <p className="mt-1 text-xs text-muted">Tell us what you&apos;re breeding for (optional).</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {BREEDING_INTERESTS.map((interest) => (
                <label
                  key={interest}
                  className="chip flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm transition has-[:checked]:border-accent/60 has-[:checked]:text-accent"
                >
                  <input type="checkbox" name="breeding_interests" value={interest} className="accent-accent" />
                  {interest}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-medium">Open to networking for…</legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {NETWORK_INTERESTS.map((interest) => (
                <label
                  key={interest}
                  className="chip flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm transition has-[:checked]:border-accent/60 has-[:checked]:text-accent"
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
              <option key={t} value={t} className="bg-surface">
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
        <p role="alert" className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
          {status.message}
        </p>
      )}

      <button type="submit" disabled={status.state === "sending"} className="btn-3d w-full py-4 text-base disabled:opacity-60">
        <PawIcon className="h-5 w-5" />
        {status.state === "sending"
          ? "Saving…"
          : role === "breeder"
            ? "Claim my founding spot"
            : "Join the buyer waitlist"}
      </button>
      <p className="text-center text-xs text-muted">
        Connection platform only. No payment is collected to join the waitlist.
      </p>
    </form>
  );
}
