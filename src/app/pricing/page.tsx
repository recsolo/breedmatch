import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pricing — BreedMatch" };

const plans = [
  {
    name: "Buyer",
    price: "$5",
    period: "every 3 months",
    points: [
      "Browse breeder profiles free",
      "Activate to send applications and message",
      "No auto-renew — your profile is saved if it lapses",
      "Switching to a breeder account? Get a $5 credit",
    ],
  },
  {
    name: "Breeder Monthly",
    price: "$10",
    period: "per month",
    points: ["Appear in the buyer swipe deck", "Unlimited applications", "Network mode", "Cancel anytime"],
  },
  {
    name: "Breeder Yearly",
    price: "$60",
    period: "per year",
    highlight: "Works out to $5/month",
    points: ["Everything in Monthly", "Half the cost of paying monthly"],
  },
  {
    name: "Breeder Lifetime",
    price: "$150",
    period: "one time",
    highlight: "Founding breeders only",
    points: ["Everything, for as long as BreedMatch runs", "Only offered during the founding window"],
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold">Simple, low pricing</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Activation fees keep profiles real and serious. That&apos;s the only money that touches
        BreedMatch — puppies, deposits, stud fees, and services are always handled directly
        between users, outside the app.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div key={plan.name} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-medium">{plan.name}</h2>
            <p className="mt-4">
              <span className="font-display text-4xl font-semibold">{plan.price}</span>{" "}
              <span className="text-sm text-muted">{plan.period}</span>
            </p>
            {plan.highlight && (
              <p className="mt-2 text-sm font-medium text-accent-strong">{plan.highlight}</p>
            )}
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {plan.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-accent-soft p-6">
        <p className="font-medium text-accent-strong">Founding breeders: first 90 days free.</p>
        <p className="mt-1 text-sm text-muted">
          Nobody is charged during the beta. Join now and we&apos;ll email you before billing ever
          starts.
        </p>
        <Link href="/join?role=breeder" className="mt-4 inline-block font-medium text-accent underline">
          Claim a founding spot →
        </Link>
      </div>
    </section>
  );
}
