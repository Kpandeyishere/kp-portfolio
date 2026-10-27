import { useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HERO_IMAGE, SHOWREEL_SRC, SHOWREEL_POSTER } from "@/data/portfolio";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { scrollToSection } from "@/lib/scroll";
import { FilmGrain } from "./FilmGrain";
import { PlayButton } from "./PlayButton";
import { VideoModal } from "./VideoModal";

const EASE = [0.16, 1, 0.3, 1] as const;

function MaskedLine({
  children,
  delay,
  className,
}: {
  children: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();
  const bg = useMouseParallax(12);
  const type = useMouseParallax(6);
  const card = useMouseParallax(24);
  const detail = useMouseParallax(16);

  const { scrollYProgress } = useScroll();
  const scrollFade = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const d = (value: number): number => (reduced ? 0 : value);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Cinematic background plate */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: bg.x, y: bg.y }}
        initial={{ opacity: 0, scale: reduced ? 1 : 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 1.2, delay: d(0.25) },
          scale: { duration: 2.4, delay: d(0.3), ease: EASE },
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="Cinematic night frame from a graded film sequence"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-[108%] w-[108%] -translate-x-[4%] -translate-y-[4%] object-cover"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-background/70 via-background/25 to-background"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(120%_100%_at_60%_38%,transparent_18%,var(--background)_100%)] opacity-70"
      />
      <FilmGrain position="absolute" opacity={0.2} />

      {/* Load curtain */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-40 bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: d(0.25), ease: "easeInOut" }}
      />

      {/* Editorial rail */}
      <motion.ul
        className="absolute top-1/2 left-4 z-20 hidden -translate-y-1/2 space-y-4 xl:block"
        style={{ x: detail.x, y: detail.y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: d(2.0) }}
      >
        {["01 / Video", "02 / Photo", "03 / Motion"].map((item) => (
          <li key={item} className="label-xs text-muted-foreground">
            {item}
          </li>
        ))}
      </motion.ul>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1700px] flex-col justify-center px-5 pt-28 pb-28 md:px-10 lg:pt-32 lg:pb-24">
        {/* Overlapping type + media composition */}
        <div className="relative">
          <motion.h1
            className="relative z-10 font-display leading-[0.78] tracking-[0.01em] text-foreground"
            style={{ x: type.x, y: type.y }}
          >
            <span className="sr-only">Kartik Pandey — Video Editor and Photo Editor</span>
            <span aria-hidden="true" className="block text-[21vw] lg:text-[15vw]">
              <MaskedLine delay={d(0.55)}>KARTIK</MaskedLine>
              <MaskedLine delay={d(0.75)} className="lg:pl-[16vw]">
                PANDEY
              </MaskedLine>
            </span>
          </motion.h1>

          {/* Cinematic frame overlapping the typography */}
          <motion.div
            className="relative z-20 mt-8 lg:absolute lg:top-[6%] lg:right-[2%] lg:mt-0 lg:w-[30vw]"
            style={{ x: card.x, y: card.y }}
            initial={{ opacity: 0, y: reduced ? 0 : 60, clipPath: "inset(12% 0% 12% 0%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, delay: d(1.1), ease: EASE }}
          >
            <button
              type="button"
              data-cursor="play"
              onClick={() => setModalOpen(true)}
              aria-label="Watch showreel"
              className="group relative block w-full overflow-hidden border border-border text-left shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] transition-all duration-700 hover:-translate-y-1.5 hover:border-accent/60"
            >
              <span className="vignette relative block aspect-[16/10] w-full overflow-hidden lg:aspect-[4/5]">
                <img
                  src={SHOWREEL_POSTER}
                  alt="Showreel preview frame"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-background/45 transition-colors duration-700 group-hover:bg-background/20"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <PlayButton size="md" />
                </span>
                <span className="label-xs absolute top-4 left-4 text-foreground/80">
                  Showreel
                </span>
              </span>
              <span className="flex items-center justify-between gap-3 border-t border-border bg-background/70 px-4 py-3 backdrop-blur-sm">
                <span className="label-xs text-foreground">Watch Showreel</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform duration-500 group-hover:translate-x-1.5" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Role + supporting copy */}
        <motion.div
          className="relative z-10 mt-10 grid gap-6 lg:mt-12 lg:w-[62%] lg:grid-cols-12 lg:items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: d(1.5), ease: EASE }}
        >
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="label-xs text-foreground">Video Editor</p>
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <p className="label-xs text-foreground">Photo Editor</p>
            </div>
            <p className="mt-5 max-w-sm text-base text-muted-foreground md:text-lg">
              Crafting cinematic cuts, colour and motion.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 lg:col-span-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group label-xs link-underline flex items-center gap-3 text-foreground"
            >
              Watch Showreel
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("video-works")}
              className="group label-xs link-underline flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore Work
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-1.5" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("video-works")}
        aria-label="Scroll to work"
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        style={{ opacity: scrollFade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: d(2.4) }}
      >
        <span className="label-xs text-muted-foreground">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 block h-5 bg-accent"
            animate={reduced ? { y: 0 } : { y: ["-100%", "240%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>

      <VideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        src={SHOWREEL_SRC}
        poster={SHOWREEL_POSTER}
        title="Kartik Pandey — Showreel"
      />
    </section>
  );
}
