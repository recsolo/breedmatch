import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PawIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="10.5" r="1.7" />
      <circle cx="9.5" cy="6.5" r="1.7" />
      <circle cx="14.5" cy="6.5" r="1.7" />
      <circle cx="18.5" cy="10.5" r="1.7" />
      <path d="M12 11c-2.5 0-4.5 1.8-5 4-.4 1.8 1 3 2.6 3 1 0 1.6-.5 2.4-.5s1.4.5 2.4.5c1.6 0 3-1.2 2.6-3-.5-2.2-2.5-4-5-4Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.8 7.6 7 9 4.2-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

export function DnaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4c0 5 10 7 10 12M17 4c0 5-10 7-10 12M7 20c0-1 10-3 10-8M17 20c0-1-10-3-10-8" />
      <path d="M8.5 7h7M9.5 10h5M9.5 14h5M8.5 17h7" />
    </svg>
  );
}

export function RadarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12 19 7" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChatAlertIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
      <path d="M12 8v3" />
      <path d="M12 13.5h.01" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.3-9.2-8.5C1.3 8.6 2.7 5.5 5.7 5c2-.3 3.5.8 4.3 2 .8-1.2 2.3-2.3 4.3-2 3 .5 4.4 3.6 2.9 6.5C19 15.7 12 20 12 20Z" />
    </svg>
  );
}

export function XMarkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c.6 4.3 2.7 6.4 7 7-4.3.6-6.4 2.7-7 7-.6-4.3-2.7-6.4-7-7 4.3-.6 6.4-2.7 7-7Z" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M12 7.2 6.5 16M12 7.2 17.5 16M7.2 18h9.6" />
    </svg>
  );
}

/** Dog portrait styled for the dark/neon theme. */
export function DogPortrait({
  tone = "golden",
  className,
}: {
  tone?: "golden" | "choco" | "slate";
  className?: string;
}) {
  const c =
    tone === "choco"
      ? { a: "#9b6239", b: "#7a4a2b", ear: "#5e3920" }
      : tone === "slate"
        ? { a: "#9aa0ad", b: "#787e8b", ear: "#5c616c" }
        : { a: "#f0ad4e", b: "#d68f2c", ear: "#b9751d" };
  const uid = `dog-${tone}`;
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Illustrated dog">
      <defs>
        <radialGradient id={`bg-${uid}`} cx="50%" cy="28%" r="85%">
          <stop offset="0%" stopColor="#2a1c40" />
          <stop offset="60%" stopColor="#170f2a" />
          <stop offset="100%" stopColor="#0d0820" />
        </radialGradient>
        <linearGradient id={`rim-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6a3d" />
          <stop offset="50%" stopColor="#ff3d8b" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#bg-${uid})`} />
      {/* soft glow behind head */}
      <circle cx="100" cy="104" r="62" fill={`url(#rim-${uid})`} opacity="0.18" />
      {/* ears */}
      <path d="M52 70c-16-6-28 6-26 26 2 18 16 26 28 22Z" fill={c.ear} />
      <path d="M148 70c16-6 28 6 26 26-2 18-16 26-28 22Z" fill={c.ear} />
      {/* head */}
      <path d="M100 48c30 0 50 22 50 52 0 32-24 52-50 52S50 132 50 100c0-30 20-52 50-52Z" fill={c.a} />
      <path d="M100 78c18 0 30 14 30 34 0 22-14 36-30 36s-30-14-30-36c0-20 12-34 30-34Z" fill="#fdf4e6" />
      {/* eyes */}
      <circle cx="84" cy="98" r="7" fill="#20141f" />
      <circle cx="116" cy="98" r="7" fill="#20141f" />
      <circle cx="86" cy="96" r="2.2" fill="#fff" />
      <circle cx="118" cy="96" r="2.2" fill="#fff" />
      {/* snout */}
      <ellipse cx="100" cy="122" rx="16" ry="12" fill={c.b} />
      <ellipse cx="100" cy="116" rx="7" ry="5.5" fill="#20141f" />
      <path
        d="M100 121v10M100 131c-4 0-7-2-8-5M100 131c4 0 7-2 8-5"
        stroke="#20141f"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* neon rim light */}
      <path
        d="M100 48c30 0 50 22 50 52 0 32-24 52-50 52"
        fill="none"
        stroke={`url(#rim-${uid})`}
        strokeWidth="3"
        opacity="0.9"
      />
    </svg>
  );
}
