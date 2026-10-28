import Link from "next/link";
import { PawIcon } from "@/components/icons";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/safety", label: "Safety" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-xl text-white"
            style={{
              background: "var(--grad)",
              boxShadow: "0 0 20px -4px rgba(255,61,139,0.7)",
            }}
          >
            <PawIcon className="h-4.5 w-4.5" />
          </span>
          <span>
            Breed<span className="neon">Match</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/join" className="btn-3d px-4 py-2 text-sm">
          Join early
        </Link>
      </div>
    </header>
  );
}
