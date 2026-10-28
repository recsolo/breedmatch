import Link from "next/link";
import { PawIcon } from "@/components/icons";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/safety", label: "Safety" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white">
            <PawIcon className="h-4 w-4" />
          </span>
          Breed<span className="-ml-1.5 text-accent">Match</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/join"
          className="btn-accent rounded-full px-4 py-2 text-sm font-semibold text-white"
        >
          Join early
        </Link>
      </div>
    </header>
  );
}
