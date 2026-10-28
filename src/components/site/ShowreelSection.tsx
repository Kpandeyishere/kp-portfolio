
import { useEffect, useRef, useState } from "react";
import { SHOWREEL_POSTER, SHOWREEL_SRC } from "@/data/portfolio";
import { VideoModal } from "./VideoModal";
import { FilmGrain } from "./FilmGrain";
import { MediaReveal, Reveal } from "./Reveal";
import { SectionMarker } from "./SectionHeading";

export function ShowreelSection() {
  const [open, setOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPreview = () => {
      if (document.visibilityState !== "visible") return;

      video.play().catch(() => {
        // Autoplay may be blocked by the browser.
        // The poster and click-to-play option remain available.
      });
    };

    video.addEventListener("canplay", playPreview);
    playPreview();

    return () => {
      video.removeEventListener("canplay", playPreview);
    };
  }, []);

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
            Pacing, colour and story — a selection of the work.
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
            {!videoError ? (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={SHOWREEL_SRC}
                poster={SHOWREEL_POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() => setVideoError(true)}
              />
            ) : (
              <img
                src={SHOWREEL_POSTER}
                alt="Kartik Pandey showreel preview"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <FilmGrain position="absolute" opacity={0.08} />

            <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>

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
