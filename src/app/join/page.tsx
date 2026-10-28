import type { Metadata } from "next";
import { JoinForm } from "@/components/join-form";

export const metadata: Metadata = { title: "Join early — BreedMatch" };

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold">Join BreedMatch early</h1>
      <p className="mt-3 text-muted">
        We&apos;re launching in Indiana and the Midwest. Breeders who join now become Founding
        Breeders — 90 days free and first in the swipe deck. Buyers get early access the day we
        open.
      </p>
      <JoinForm initialRole={role === "buyer" ? "buyer" : "breeder"} />
    </section>
  );
}
