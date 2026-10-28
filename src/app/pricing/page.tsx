import type { Metadata } from "next";
import Link from "next/link";
import { PawIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Pricing — BreedMatch" };

const plans = [
  {
    name: "Buyer",
    price: "$5",
    period: "/ 3 months",
    points: [
      "Browse breeder profiles free",
      "Activate to send applications & message",
      "No auto-renew — profile saved if it lapses",
      "Switch to breeder? Get a $5 credit",
    ],
  },
  {
    name: "Breeder Monthly",
    price: "$10",
    period: "/ month",
    points: ["Appear in the buyer swipe deck", "Unlimited applications", "Network mode", "Cancel anytime"],
  },
  {
    name: "Breeder Yearly",
    price: "$60",
    period: "/ year",
    highlight: "Best value — just $5/month",
    featured: true,
    points: ["Everything in Monthly", "Half the cost of paying monthly", "One simple renewal a year"],
  },
  {
    name: "Breeder Lifetime",
    price: "$150",
    period: "once",
    highlight: "Founding breeders only",
    points: ["Everything, for as long as we run", "No renewals, ever", "Only during the founding window"],
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h1 className="font-display text-4xl font-bold sm:text-6xl">
        Simple, <span className="neon">low pricing.</span>
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Activation keeps profiles real and serious — the only money that ever touches BreedMatch.
        Puppies, deposits, stud fees, and services are always handled directly between users,
        outside the app.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl p-6 ${
              plan.featured ? "ring-grad glass lg:-translate-y-4" : "glass glass-hover"
            }`}
          >
            {plan.featured && (
              <span className="btn-3d absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 text-xs">
                Most popular
              </span>
            )}
            <h2 className="font-display text-lg font-semibold">{plan.name}</h2>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold">{plan.price}</span>
              <span className="text-sm text-muted">{plan.period}</span>
            </p>
            {plan.highlight ? (
              <p className="mt-2 text-sm font-semibold text-accent">{plan.highlight}</p>
            ) : (
              <p className="mt-2 text-sm text-transparent select-none">placeholder</p>
            )}
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {plan.points.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--grad)" }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ring-grad glass mt-14 flex flex-col gap-5 rounded-3xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div>
          <p className="font-display text-xl font-semibold">Founding breeders: first 90 days free.</p>
          <p className="mt-1.5 text-sm text-muted">
            Nobody is charged during the beta. Join now — we&apos;ll email you before billing ever
            starts.
          </p>
        </div>
        <Link href="/join?role=breeder" className="btn-3d shrink-0 px-6 py-3.5">
          <PawIcon className="h-4.5 w-4.5" /> Claim a founding spot
        </Link>
      </div>
    </section>
  );
}
