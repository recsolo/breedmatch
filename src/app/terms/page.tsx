import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms — BreedMatch" };

// Placeholder terms for the waitlist phase. Have these reviewed by a lawyer before
// accepting any activation payments.
export default function TermsPage() {
  return (
    <section className="prose-legal mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold">Terms of Use</h1>
      <p className="mt-4 text-sm">Draft — last updated during the pre-launch waitlist.</p>

      <h2>What BreedMatch is</h2>
      <p>
        BreedMatch is a connection platform for dog breeders and prospective puppy buyers. We
        provide profiles, discovery, matching, and messaging. We are not a party to any agreement
        between users.
      </p>

      <h2>What BreedMatch is not</h2>
      <ul>
        <li>We do not sell, broker, or transport animals.</li>
        <li>We do not process deposits, stud fees, or any payment between users.</li>
        <li>We do not guarantee the health, genetics, temperament, or registration of any animal.</li>
        <li>We do not verify that users comply with local, state, or federal breeding laws.</li>
      </ul>

      <h2>Your responsibilities</h2>
      <p>
        You are responsible for your own due diligence, agreements, payments, and legal
        compliance. You agree not to post false, stolen, or misleading content, and not to use
        BreedMatch to defraud other users.
      </p>

      <h2>Activation fees</h2>
      <p>
        The only payments BreedMatch accepts are profile activation fees. No fees are charged
        during the pre-launch waitlist.
      </p>

      <h2>Moderation</h2>
      <p>We may remove content or suspend accounts that violate these terms or put users at risk.</p>
    </section>
  );
}
