import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy — BreedMatch" };

// Placeholder policy for the waitlist phase. Have this reviewed before launch.
export default function PrivacyPage() {
  return (
    <section className="prose-legal mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-sm">Draft — last updated during the pre-launch waitlist.</p>

      <h2>What we collect</h2>
      <p>
        When you join the waitlist we collect your name, email, ZIP code, account type, and the
        breed and kennel details you choose to share.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To contact you about launch, your founding spot, and your account.</li>
        <li>To plan which regions and breeds to launch first.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Removing your data</h2>
      <p>
        Email{" "}
        <a href="mailto:hello@breedmatch.app" className="text-accent underline">
          hello@breedmatch.app
        </a>{" "}
        and we&apos;ll delete your waitlist entry.
      </p>
    </section>
  );
}
