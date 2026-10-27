import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";

type CursorMode = "default" | "view" | "play" | "link";

const LABEL: Record<CursorMode, string> = {
  default: "",
  view: "View",
  play: "Play",
  link: "↗",
};

/**
 * Minimal desktop cursor: a small dot that expands into a labelled disc over
 * portfolio media. Disabled for touch pointers and reduced-motion users.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = fine.matches && !reduced.matches;
    setEnabled(active);
    if (!active) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent): void => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      const holder = target?.closest?.("[data-cursor]") as HTMLElement | null;
      const value = holder?.dataset["cursor"];
      if (value === "view" || value === "play" || value === "link") setMode(value);
      else if (target?.closest?.("a,button,[role='button']")) setMode("link");
      else setMode("default");
    };
    const onLeave = (): void => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const expanded = mode === "view" || mode === "play";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-accent/70 bg-accent/10 backdrop-blur-[2px]"
        animate={{
          width: expanded ? 76 : mode === "link" ? 22 : 8,
          height: expanded ? 76 : mode === "link" ? 22 : 8,
          x: expanded ? 12 : mode === "link" ? -11 : -4,
          y: expanded ? 12 : mode === "link" ? -11 : -4,
          backgroundColor: expanded
            ? "color-mix(in oklab, var(--color-accent) 14%, transparent)"
            : mode === "link" ? "transparent" : "var(--color-accent)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence>
          {expanded || mode === "link" ? (
            <motion.span
              key={mode}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="label-xs text-accent"
            >
              {LABEL[mode]}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
