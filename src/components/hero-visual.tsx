import {
  DnaIcon,
  DogPortrait,
  HeartIcon,
  MapPinIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@/components/icons";

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[380px]">
      {/* glow orb */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[90px]"
      />

      {/* back cards for depth */}
      <div className="absolute inset-x-8 top-10 h-[380px] rotate-6 rounded-[32px] glass opacity-40" />
      <div className="absolute inset-x-6 top-6 h-[400px] -rotate-3 rounded-[32px] glass opacity-70" />

      {/* main card */}
      <article className="floaty glass absolute inset-x-0 top-0 mx-auto w-[320px] overflow-hidden rounded-[32px]">
        <div className="relative">
          <DogPortrait tone="golden" className="h-64 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0820] via-transparent to-transparent" />

          <span className="chip absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
            <ShieldCheckIcon className="h-3.5 w-3.5 text-cyan" /> Verified kennel
          </span>

          {/* match score ring */}
          <div className="pulse-glow absolute top-3 right-3 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#120a1f]/80 text-center ring-1 ring-white/15 backdrop-blur">
            <span className="font-display text-sm leading-none font-bold neon">98%</span>
            <span className="text-[9px] leading-tight text-muted">match</span>
          </div>

          <div className="absolute bottom-3 left-4">
            <h3 className="font-display text-xl font-semibold text-white">Rivergold Kennels</h3>
            <p className="text-sm font-medium text-accent">Golden Retriever</p>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="chip inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-muted">
              <MapPinIcon className="h-3.5 w-3.5 text-cyan" /> Fishers, IN · 4 mi
            </span>
            <span className="chip inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-muted">
              <DnaIcon className="h-3.5 w-3.5 text-violet" /> OFA · Embark
            </span>
          </div>

          <div className="flex items-center justify-center gap-5 pt-1">
            <button
              type="button"
              aria-label="Pass"
              className="btn-glass h-14 w-14 rounded-full text-muted"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Like"
              className="btn-3d h-16 w-16 rounded-full"
            >
              <HeartIcon className="h-7 w-7" fill="currentColor" stroke="none" />
            </button>
          </div>
        </div>
      </article>

      {/* floating HUD chips */}
      <span className="chip floaty absolute -left-3 top-40 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white shadow-lg" style={{ animationDelay: "1.5s" }}>
        <HeartIcon className="h-3.5 w-3.5 text-accent" fill="currentColor" stroke="none" /> It&apos;s a match!
      </span>
      <span className="chip floaty absolute -right-2 bottom-24 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white shadow-lg" style={{ animationDelay: "0.8s" }}>
        <span className="h-2 w-2 rounded-full bg-emerald-400" /> Litter expected
      </span>
    </div>
  );
}
