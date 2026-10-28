import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="max-w-md">
          <p className="font-display text-base text-foreground">BreedMatch</p>
          <p className="mt-2">
            A connection platform only. We don&apos;t sell dogs, process animal payments, hold
            deposits, or take part in private agreements between users.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link href="/safety" className="hover:text-foreground">Safety</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <a href="mailto:hello@breedmatch.app" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
