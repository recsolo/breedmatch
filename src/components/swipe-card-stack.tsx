import { DogAvatar, HeartIcon, MapPinIcon, ShieldCheckIcon, XMarkIcon } from "@/components/icons";

type Card = {
  kennel: string;
  breed: string;
  location: string;
  tone: "golden" | "choco" | "slate";
  rotate: string;
  z: string;
  offset: string;
  delay: string;
};

const cards: Card[] = [
  { kennel: "Maple Ridge", breed: "German Shepherd", location: "Bloomington, IN · 12 mi", tone: "slate", rotate: "-8deg", z: "z-10", offset: "translate-x-6 translate-y-6", delay: "0s" },
  { kennel: "Cedar Hollow", breed: "Labrador Retriever", location: "Carmel, IN · 7 mi", tone: "choco", rotate: "6deg", z: "z-20", offset: "-translate-x-3 translate-y-3", delay: "0.6s" },
  { kennel: "Rivergold Kennels", breed: "Golden Retriever", location: "Fishers, IN · 4 mi", tone: "golden", rotate: "-2deg", z: "z-30", offset: "translate-x-0 translate-y-0", delay: "1.2s" },
];

export function SwipeCardStack() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[340px]">
      {cards.map((card) => (
        <article
          key={card.kennel}
          style={{ ["--r" as string]: card.rotate, animationDelay: card.delay }}
          className={`floaty absolute inset-x-0 mx-auto ${card.offset} ${card.z} w-[290px] overflow-hidden rounded-[26px] border border-border bg-surface shadow-[var(--shadow-card)]`}
        >
          <div className="relative">
            <DogAvatar tone={card.tone} className="h-56 w-full object-cover" />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-forest px-2.5 py-1 text-xs font-medium text-white shadow">
              <ShieldCheckIcon className="h-3.5 w-3.5" /> Verified kennel
            </span>
            <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-forest shadow">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Litter expected
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold">{card.kennel}</h3>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent">{card.breed}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted">
              <MapPinIcon className="h-3.5 w-3.5" /> {card.location}
            </p>
            <div className="mt-4 flex items-center justify-center gap-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-sm">
                <XMarkIcon className="h-5 w-5" />
              </span>
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-accent p-3 text-white shadow-[0_10px_20px_-8px_rgba(194,83,31,0.8)]">
                <HeartIcon className="h-6 w-6" />
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
