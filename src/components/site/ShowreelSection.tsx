import { useState } from "react";
import { SHOWREEL_POSTER, SHOWREEL_SRC } from "@/data/portfolio";
import { VideoModal } from "./VideoModal";
import { FilmGrain } from "./FilmGrain";
import { MediaReveal, Reveal } from "./Reveal";
import { SectionMarker } from "./SectionHeading";

export function ShowreelSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="showreel"
      className="relative border-t border-border px-5 py-32 md:px-10 md:py-48"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <SectionMarker number="02" label="Showreel" />
          </Reveal>

          <h2 className="mt-6 font-display text-[16vw] leading-[0.85] tracking-wide sm:text-7xl lg:text-8xl">
            <Reveal variant="mask" delay={0.05}>
              <span className="block">THE REEL</span>
            </Reveal>
          </h2>
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm text-muted-foreground">
            Pacing, colour and story — two minutes of the work.
          </p>
        </Reveal>
      </div>

      <MediaReveal className="mt-14 md:mt-20">
        <button
          type="button"
          data-cursor="play"
          onClick={() => setOpen(true)}
          aria-label="Open showreel player"
          className="group relative block w-full overflow-hidden text-left"
        >
          <span className="vignette relative block aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[16/9] lg:aspect-[21/9]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={SHOWREEL_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />

            <FilmGrain position="absolute" opacity={0.08} />

            <span className="pointer-events-none absolute bottom-5 left-5 z-10 md:bottom-8 md:left-8">
              <span className="label-xs block text-foreground">
                Kartik Pandey
              </span>
              <span className="label-xs mt-2 block text-muted-foreground">
                Showreel / 2026
              </span>
            </span>

            <span className="pointer-events-none label-xs absolute bottom-5 right-5 z-10 text-muted-foreground md:bottom-8 md:right-8">
              PLAY FULL REEL
            </span>
          </span>
        </button>
      </MediaReveal>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        src={SHOWREEL_SRC}
        poster={SHOWREEL_POSTER}
        title="Kartik Pandey — Showreel 2026"
        meta="Showreel / 2026"
      />
    </section>
  );
}
