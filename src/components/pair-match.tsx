import { DnaIcon, DogPortrait, FemaleIcon, HeartIcon, MaleIcon, ShieldCheckIcon } from "@/components/icons";

type Dog = {
  kennel: string;
  breed: string;
  tone: "golden" | "choco" | "slate";
  sex: "stud" | "dam";
  rotate: string;
  delay: string;
};

const dogs: Dog[] = [
  { kennel: "Rivergold's Atlas", breed: "Golden Retriever · ♂", tone: "golden", sex: "stud", rotate: "-5deg", delay: "0s" },
  { kennel: "Maple Ridge Juno", breed: "Golden Retriever · ♀", tone: "choco", sex: "dam", rotate: "5deg", delay: "0.9s" },
];

export function PairMatch() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[460px] items-center justify-center gap-3 sm:gap-6">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-64 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[80px]"
      />

      {dogs.map((dog, i) => (
        <article
          key={dog.kennel}
          style={{ ["--r" as string]: dog.rotate, animationDelay: dog.delay }}
          className="floaty glass relative w-[190px] overflow-hidden rounded-[26px]"
        >
          <div className="relative">
            <DogPortrait tone={dog.tone} className="h-40 w-full object-cover" />
            <span
              className={`chip absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                dog.sex === "stud" ? "text-cyan" : "text-accent"
              }`}
            >
              {dog.sex === "stud" ? <MaleIcon className="h-3.5 w-3.5" /> : <FemaleIcon className="h-3.5 w-3.5" />}
              {dog.sex === "stud" ? "Stud" : "Dam"}
            </span>
          </div>
          <div className="p-3">
            <h3 className="font-display text-sm font-semibold text-white">{dog.kennel}</h3>
            <p className="text-xs text-muted">{dog.breed}</p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
              <span className="chip inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-muted">
                <ShieldCheckIcon className="h-3 w-3 text-cyan" /> Health cleared
              </span>
              <span className="chip inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-muted">
                <DnaIcon className="h-3 w-3 text-violet" /> COI {i === 0 ? "3.1%" : "4.0%"}
              </span>
            </div>
          </div>
        </article>
      ))}

      {/* center match badge */}
      <div className="pulse-glow absolute top-1/2 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#120a1f] ring-1 ring-white/15">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full text-white"
          style={{ background: "var(--grad)" }}
        >
          <HeartIcon className="h-5 w-5" fill="currentColor" stroke="none" />
        </span>
      </div>
    </div>
  );
}
