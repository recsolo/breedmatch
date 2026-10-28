import Link from "next/link";
import {
  ChatAlertIcon,
  DnaIcon,
  FlagIcon,
  PawIcon,
  ShieldCheckIcon,
  SparkIcon,
} from "@/components/icons";
import { SwipeCardStack } from "@/components/swipe-card-stack";

const buyerSteps = [
  {
    title: "Fill out one application",
    body: "Your home, yard, experience, and timeline — once. No more retyping the same puppy application for every kennel.",
  },
  {
    title: "Swipe breeders near you",
    body: "Filter by breed and distance. See health testing, availability, and verified-kennel badges up front.",
  },
  {
    title: "Get accepted, start talking",
    body: "Swipe right to send your application. When a breeder accepts, the chat opens.",
  },
];

const breederSteps = [
  {
    title: "Screen buyers, not tire-kickers",
    body: "Every request arrives with a complete application from a buyer who paid to activate. Accept or decline in one tap.",
  },
  {
    title: "Network with other breeders",
    body: "Swipe in Network mode for stud service, co-ownership, mentorship, new bloodlines, or puppy referrals.",
  },
  {
    title: "Refer when you're full",
    body: "Waitlist packed? Pass a great buyer to a breeder you trust. Good homes don't get lost.",
  },
];

const trust = [
  {
    icon: ShieldCheckIcon,
    title: "Verified Kennel badge",
    body: "Breeders submit a registration, kennel license, or vet reference and we review it by hand.",
  },
  {
    icon: DnaIcon,
    title: "Structured health testing",
    body: "OFA, PennHIP, Embark, and more shown as clear checkmarks — not buried in a bio.",
  },
  {
    icon: ChatAlertIcon,
    title: "Scam tripwires in chat",
    body: "Mention Zelle, gift cards, or a shipping fee before a visit and we flag a safety notice in the conversation.",
  },
  {
    icon: FlagIcon,
    title: "Report & block everywhere",
    body: "On every profile and every thread, reviewed by a real person.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-soft bg-surface px-3 py-1 text-sm font-medium text-accent-strong shadow-[var(--shadow-soft)]">
              <PawIcon className="h-4 w-4" /> Launching in Indiana &amp; the Midwest
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl">
              Find the right breeder.{" "}
              <span className="text-gradient">Let the right breeder find you.</span>
            </h1>
            <p className="mt-6 text-lg text-muted">
              BreedMatch is a swipe-to-connect app for puppy buyers and responsible dog breeders.
              One reusable application, verified kennels, and breeder-to-breeder networking — no
              puppy sales, deposits, or middlemen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join?role=breeder"
                className="btn-accent rounded-full px-6 py-3.5 text-center font-semibold text-white"
              >
                I&apos;m a breeder — claim a founding spot
              </Link>
              <Link
                href="/join?role=buyer"
                className="rounded-full border border-border bg-surface px-6 py-3.5 text-center font-semibold shadow-[var(--shadow-soft)] hover:border-foreground"
              >
                I&apos;m looking for a puppy
              </Link>
            </div>
            <dl className="mt-10 flex gap-8">
              {[
                ["200", "Founding spots"],
                ["90 days", "Free for breeders"],
                ["$0", "To browse"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-semibold text-foreground">{stat}</dt>
                  <dd className="text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <SwipeCardStack />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <StepList heading="For puppy buyers" accent="accent" steps={buyerSteps} />
            <StepList heading="For breeders" accent="forest" steps={breederSteps} />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-center gap-2 text-accent">
          <SparkIcon className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-wide uppercase">Built for trust</span>
        </div>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Puppy scams are everywhere. Here, the real breeders stand out.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                <item.icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDING CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-white sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-amber/20 blur-2xl"
          />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-amber uppercase">
              Founding Breeder program
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              The first 200 breeders get 90 days free.
            </h2>
            <p className="mt-4 text-white/80">
              Build your kennel profile now, before buyers arrive. Founding breeders are first in
              the swipe deck at launch and keep access to the $150 lifetime plan — it won&apos;t be
              offered after the founding window closes.
            </p>
            <Link
              href="/join?role=breeder"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-forest transition hover:bg-accent-soft"
            >
              <PawIcon className="h-4 w-4" /> Claim a founding spot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StepList({
  heading,
  steps,
  accent,
}: {
  heading: string;
  steps: { title: string; body: string }[];
  accent: "accent" | "forest";
}) {
  const badge =
    accent === "forest"
      ? "bg-forest-soft text-forest"
      : "bg-accent-soft text-accent-strong";
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">{heading}</h2>
      <ol className="mt-8 space-y-7">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold ${badge}`}
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-medium">{step.title}</h3>
              <p className="mt-1 text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
