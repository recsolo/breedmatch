import type { Metadata } from "next";
import Link from "next/link";
import { PawIcon } from "@/components/icons";

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
    highlight: "Best value — just $5/month",
    featured: true,
    points: ["Everything in Monthly", "Half the cost of paying monthly", "One simple renewal a year"],
  },
  {
    name: "Breeder Lifetime",
    price: "$150",
    period: "one time",
    highlight: "Founding breeders only",
    points: ["Everything, for as long as BreedMatch runs", "No renewals, ever", "Only during the founding window"],
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        Simple, <span className="text-gradient">low pricing</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Activation fees keep profiles real and serious. That&apos;s the only money that touches
        BreedMatch — puppies, deposits, stud fees, and services are always handled directly between
        users, outside the app.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-6 ${
              plan.featured
                ? "border-accent bg-surface shadow-[var(--shadow-card)] lg:-translate-y-3"
                : "border-border bg-surface"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h2 className="font-medium">{plan.name}</h2>
            <p className="mt-4">
              <span className="font-display text-4xl font-semibold">{plan.price}</span>{" "}
              <span className="text-sm text-muted">{plan.period}</span>
            </p>
            {plan.highlight && (
              <p className="mt-2 text-sm font-semibold text-accent-strong">{plan.highlight}</p>
            )}
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              {plan.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-forest p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="font-display text-xl font-semibold">Founding breeders: first 90 days free.</p>
          <p className="mt-1 text-sm text-white/80">
            Nobody is charged during the beta. Join now and we&apos;ll email you before billing ever
            starts.
          </p>
        </div>
        <Link
          href="/join?role=breeder"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-forest hover:bg-accent-soft"
        >
          <PawIcon className="h-4 w-4" /> Claim a founding spot
        </Link>
      </div>
    </section>
  );
}
