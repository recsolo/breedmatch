import type { Metadata } from "next";

export const metadata: Metadata = { title: "Safety — BreedMatch" };

export default function SafetyPage() {
  return (
    <section className="prose-legal mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold">Safety on BreedMatch</h1>
      <p className="mt-4">
        BreedMatch is a connection platform only. We do not sell dogs, process animal payments,
        hold deposits, provide escrow, guarantee breeders or buyers, verify animal health, or
        participate in private agreements. Users are fully responsible for their own due diligence
        and compliance with applicable laws.
      </p>

      <h2>Red flags to watch for</h2>
      <ul>
        <li>Asking for a deposit before you&apos;ve seen the puppy and parents in person or on live video.</li>
        <li>Payment only by gift card, Zelle, Cash App, wire transfer, or crypto.</li>
        <li>A &quot;shipping&quot;, &quot;crate&quot;, or &quot;insurance&quot; fee that appears after you agree.</li>
        <li>Prices far below normal for the breed, or pressure to decide today.</li>
        <li>Refusing to share health-testing results or registration papers.</li>
      </ul>

      <h2>How we help</h2>
      <ul>
        <li>Verified Kennel badges, reviewed by hand.</li>
        <li>Automatic safety notices when risky payment language shows up in chat.</li>
        <li>Report and block buttons on every profile and conversation.</li>
        <li>Human moderation of reports, stolen photos, and prohibited claims.</li>
      </ul>

      <h2>Report a problem</h2>
      <p>
        Use the report button in the app, or email{" "}
        <a href="mailto:safety@breedmatch.app" className="text-accent underline">
          safety@breedmatch.app
        </a>
        .
      </p>
    </section>
  );
}
