export const NETWORK_INTERESTS = [
  "Co-ownership",
  "Mentorship",
  "New bloodlines",
  "Puppy referrals",
] as const;

// Stud & dam (bitch) matching intent for breeders.
export const BREEDING_INTERESTS = [
  "I have a stud (male) available",
  "I have a dam (female) to breed",
  "Looking for a stud",
  "Looking for a dam",
] as const;

export const TIMELINES = ["asap", "3-6 months", "6-12 months", "just researching"] as const;

export type WaitlistEntry = {
  role: "breeder" | "buyer";
  name: string;
  email: string;
  zip: string;
  breeds: string;
  kennel_name: string | null;
  website: string | null;
  years_breeding: number | null;
  timeline: (typeof TIMELINES)[number] | null;
  network_interests: string[];
  breeding_interests: string[];
  notes: string | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : null;
}

// Validates untrusted form input. Returns the cleaned entry or a user-facing error.
export function parseWaitlistEntry(input: Record<string, unknown>): WaitlistEntry | { error: string } {
  const role = input.role === "breeder" || input.role === "buyer" ? input.role : null;
  const name = text(input.name, 120);
  const email = text(input.email, 254)?.toLowerCase() ?? null;
  const zip = text(input.zip, 5);
  const breeds = text(input.breeds, 300);

  if (!role) return { error: "Choose breeder or buyer." };
  if (!name) return { error: "Enter your name." };
  if (!email || !EMAIL_RE.test(email)) return { error: "Enter a valid email address." };
  if (!zip || !/^\d{5}$/.test(zip)) return { error: "Enter a 5-digit ZIP code." };
  if (!breeds) return { error: role === "breeder" ? "List the breed(s) you raise." : "List the breed(s) you're interested in." };

  const yearsRaw = Number(input.years_breeding);
  const years =
    role === "breeder" && Number.isInteger(yearsRaw) && yearsRaw >= 0 && yearsRaw <= 80 ? yearsRaw : null;

  const timeline =
    role === "buyer" && TIMELINES.includes(input.timeline as (typeof TIMELINES)[number])
      ? (input.timeline as (typeof TIMELINES)[number])
      : null;

  const interests = Array.isArray(input.network_interests)
    ? input.network_interests.filter((i): i is string =>
        NETWORK_INTERESTS.includes(i as (typeof NETWORK_INTERESTS)[number]),
      )
    : [];

  const breeding = Array.isArray(input.breeding_interests)
    ? input.breeding_interests.filter((i): i is string =>
        BREEDING_INTERESTS.includes(i as (typeof BREEDING_INTERESTS)[number]),
      )
    : [];

  return {
    role,
    name,
    email,
    zip,
    breeds,
    kennel_name: role === "breeder" ? text(input.kennel_name, 120) : null,
    website: role === "breeder" ? text(input.website, 300) : null,
    years_breeding: years,
    timeline,
    network_interests: role === "breeder" ? interests : [],
    breeding_interests: role === "breeder" ? breeding : [],
    notes: text(input.notes, 1000),
  };
}
