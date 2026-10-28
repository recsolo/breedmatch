import Link from "next/link";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/safety", label: "Safety" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          Breed<span className="text-accent">Match</span>
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
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-strong"
        >
          Join early
        </Link>
      </div>
    </header>
  );
}
