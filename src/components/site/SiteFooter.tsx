
import { navLinks } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { ArrowUpRight, ArrowUp, Clapperboard } from "lucide-react";

const HERO_BG =
  "https://pub-6f377ff8bf0241edba33c58598adae5a.r2.dev/kp%20works/new/herobg.png";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] px-5 pb-6 pt-14 text-white md:px-10 md:pt-20">
      {/* Sharp hero background — no blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url("${HERO_BG}")` }}
        />

        {/* Subtle dark overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      {/* Subtle cinematic glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-white/[0.03] blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-16">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2">
              <Clapperboard
                size={14}
                strokeWidth={1.5}
                className="text-white/80"
              />
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                Independent Creative
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group block text-left"
            >
              <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.055em] transition-colors duration-300 group-hover:text-white/80">
                KARTIK
                <br />
                PANDEY<span className="text-white/45">.</span>
              </h2>
            </button>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70 md:text-base">
              Video Editor
              <span className="mx-2 text-white/40">/</span>
              Photo Editor
              <br />
              <span className="text-white/95">
                Every frame tells a story.
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end md:pb-1">
            <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-white/50">
              Explore
            </p>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-3"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-xs uppercase tracking-[0.12em] text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col gap-3 pt-5 text-[10px] uppercase tracking-[0.12em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kartik Pandey. All rights reserved.
          </p>

          <p>
            Crafted with intention
            <span className="px-2 text-white/35">·</span>
            Made for the frame
          </p>
        </div>
      </div>
    </footer>
  );
}
