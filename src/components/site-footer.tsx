import Link from "next/link";
import { PawIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-lg text-white"
              style={{ background: "var(--grad)" }}
            >
              <PawIcon className="h-3.5 w-3.5" />
            </span>
            BreedMatch
          </div>
          <p className="mt-3">
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
