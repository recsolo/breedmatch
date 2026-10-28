import Link from "next/link";

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
    title: "Verified Kennel badge",
    body: "Breeders submit a registration, kennel license, or vet reference and we review it by hand.",
  },
  {
    title: "Structured health testing",
    body: "OFA, PennHIP, Embark, and more shown as clear checkmarks — not buried in a bio.",
  },
  {
    title: "Scam tripwires in chat",
    body: "Mention Zelle, gift cards, or a shipping fee before a visit and we flag a safety notice in the conversation.",
  },
  {
    title: "Report & block everywhere",
    body: "On every profile and every thread, reviewed by a real person.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:pt-24">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-accent-soft px-3 py-1 text-sm text-accent-strong">
            Launching in Indiana &amp; the Midwest
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-6xl">
            Find the right breeder. Let the right breeder find you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            BreedMatch is a swipe-to-connect app for puppy buyers and responsible dog breeders.
            One reusable application, verified kennels, and breeder-to-breeder networking — no
            puppy sales, deposits, or middlemen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join?role=breeder"
              className="rounded-full bg-accent px-6 py-3 text-center font-medium text-white hover:bg-accent-strong"
            >
              I&apos;m a breeder — claim a founding spot
            </Link>
            <Link
              href="/join?role=buyer"
              className="rounded-full border border-border bg-surface px-6 py-3 text-center font-medium hover:border-foreground"
            >
              I&apos;m looking for a puppy
            </Link>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2">
          <StepList heading="For puppy buyers" steps={buyerSteps} />
          <StepList heading="For breeders" steps={breederSteps} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-semibold">Built for trust from day one</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Puppy scams are everywhere. BreedMatch is designed so the real breeders stand out.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-forest px-6 py-12 text-white sm:px-12">
          <p className="text-sm tracking-wide text-white/70 uppercase">Founding Breeder program</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            The first 200 breeders get 90 days free.
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Build your kennel profile now, before buyers arrive. Founding breeders are first in the
            swipe deck at launch and keep access to the $150 lifetime plan — it won&apos;t be
            offered after the founding window closes.
          </p>
          <Link
            href="/join?role=breeder"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-forest hover:bg-accent-soft"
          >
            Claim a founding spot
          </Link>
        </div>
      </section>
    </>
  );
}

function StepList({
  heading,
  steps,
}: {
  heading: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold">{heading}</h2>
      <ol className="mt-6 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-strong">
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
