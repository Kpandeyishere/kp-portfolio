import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { useActiveSection } from "@/hooks/use-active-section";

const SECTION_IDS = ["hero", "video-works", "photoshop-works", "contact"] as const;
const EASE = [0.16, 1, 0.3, 1] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string): void => {
    setOpen(false);
    window.setTimeout(() => scrollToSection(id), open ? 320 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled && !open
            ? "border-b border-border bg-background/65 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <button
            type="button"
            onClick={() => go("hero")}
            className="label-xs font-medium tracking-[0.3em] text-foreground transition-colors hover:text-accent"
          >
            Kartik Pandey
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => go(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`label-xs relative transition-colors duration-500 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[80] flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-background px-5 pt-28 pb-10 md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => go(link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: EASE }}
                  className="flex items-baseline justify-between border-b border-border py-5 text-left"
                >
                  <span
                    className={`font-display text-5xl tracking-wide ${
                      active === link.id ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span className="label-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div>
              <button
                type="button"
                onClick={() => go("contact")}
                className="label-xs block w-full border border-accent px-5 py-4 text-center text-accent"
              >
                Contact
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
