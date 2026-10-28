import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import {
  BoltIcon,
  ChatAlertIcon,
  DnaIcon,
  NetworkIcon,
  PawIcon,
  RadarIcon,
  ShieldCheckIcon,
  SparkIcon,
} from "@/components/icons";

const buyerSteps = [
  {
    title: "One smart application",
    body: "Your home, yard, experience, and timeline — filled once, reused everywhere. No more retyping for every kennel.",
  },
  {
    title: "Swipe breeders near you",
    body: "Filter by breed and distance. Health testing, availability, and verified badges, all up front.",
  },
  {
    title: "Get accepted, start talking",
    body: "Swipe right to send your application. When a breeder accepts, the chat unlocks instantly.",
  },
];

const breederSteps = [
  {
    title: "Pre-screened buyers only",
    body: "Every request arrives with a complete application from a buyer who activated. Accept or decline in one tap.",
  },
  {
    title: "Network with breeders",
    body: "Swipe in Network mode for stud service, co-ownership, mentorship, new bloodlines, or referrals.",
  },
  {
    title: "Refer when you're full",
    body: "Waitlist packed? Pass a great buyer to a breeder you trust. Good homes never get lost.",
  },
];

const trust = [
  {
    icon: ShieldCheckIcon,
    title: "Verified Kennel badge",
    body: "Breeders submit a registration, license, or vet reference — reviewed by a real person.",
    color: "text-cyan",
  },
  {
    icon: DnaIcon,
    title: "Structured health testing",
    body: "OFA, PennHIP, Embark and more, shown as clean verified data — not buried in a bio.",
    color: "text-violet",
  },
  {
    icon: ChatAlertIcon,
    title: "Scam tripwires in chat",
    body: "Zelle, gift cards, or a shipping fee before a visit? We flag a safety notice instantly.",
    color: "text-accent",
  },
  {
    icon: RadarIcon,
    title: "Report & block, everywhere",
    body: "On every profile and every thread, backed by active human moderation.",
    color: "text-coral",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div className="max-w-xl">
            <p className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground">
              <SparkIcon className="h-4 w-4 text-accent" />
              Now onboarding founders in Indiana &amp; the Midwest
            </p>
            <h1 className="mt-6 font-display text-[2.8rem] leading-[1.02] font-bold sm:text-[4.3rem]">
              Swipe. Match.
              <br />
              <span className="neon">Meet your breeder.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              BreedMatch is the modern way to connect puppy buyers with responsible dog breeders —
              one reusable application, verified kennels, and breeder-to-breeder networking. No
              puppy sales, no deposits, no middlemen.
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/join?role=breeder" className="btn-3d px-6 py-4 text-base">
                <PawIcon className="h-5 w-5" /> Claim a founding spot
              </Link>
              <Link href="/join?role=buyer" className="btn-glass px-6 py-4 text-base">
                I&apos;m looking for a puppy
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4">
              {[
                ["200", "Founding spots"],
                ["90 days", "Free for breeders"],
                ["$0", "To browse"],
              ].map(([stat, label]) => (
                <div key={label} className="glass rounded-2xl px-4 py-3">
                  <dt className="font-display text-2xl font-bold neon">{stat}</dt>
                  <dd className="mt-0.5 text-xs text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <SectionLabel icon={BoltIcon}>How it works</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          A dating-app flow, built for serious matches.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <StepCard heading="For puppy buyers" accent="accent" steps={buyerSteps} />
          <StepCard heading="For breeders" accent="cyan" icon={NetworkIcon} steps={breederSteps} />
        </div>
      </section>

      {/* ---------- TRUST ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionLabel icon={ShieldCheckIcon}>Built for trust</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Puppy scams are everywhere. Here, real breeders stand out.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item.title} className="glass glass-hover rounded-3xl p-6">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 ${item.color}`}>
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOUNDING CTA ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="ring-grad glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-[100px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-wider text-accent uppercase">
              Founding Breeder program
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              The first 200 breeders get <span className="neon">90 days free.</span>
            </h2>
            <p className="mt-5 text-lg text-muted">
              Build your kennel profile now, before buyers arrive. Founders rank first in the swipe
              deck at launch and lock in the $150 lifetime plan — gone once the window closes.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href="/join?role=breeder" className="btn-3d px-8 py-4 text-base">
                <PawIcon className="h-5 w-5" /> Claim your founding spot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-accent">
      <Icon className="h-5 w-5" />
      <span className="font-display text-sm font-semibold tracking-wider uppercase">{children}</span>
    </div>
  );
}

function StepCard({
  heading,
  steps,
  accent,
  icon: Icon = PawIcon,
}: {
  heading: string;
  steps: { title: string; body: string }[];
  accent: "accent" | "cyan";
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const ring = accent === "cyan" ? "text-cyan" : "text-accent";
  return (
    <div className="glass rounded-3xl p-7">
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 ${ring}`}>
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl font-semibold">{heading}</h3>
      </div>
      <ol className="mt-7 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold neon ring-1 ring-white/10">
              {i + 1}
            </span>
            <div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="mt-1 text-sm text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
