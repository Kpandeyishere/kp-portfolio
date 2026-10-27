import { useEffect } from "react";
import { useMotionValue, useSpring, useReducedMotion, type MotionValue } from "motion/react";

type ParallaxValues = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

/**
 * Pointer-driven parallax in pixels. Disabled for touch devices and when the
 * visitor prefers reduced motion.
 */
export function useMouseParallax(strength: number): ParallaxValues {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const reduced = useReducedMotion();

  const x = useSpring(rawX, { stiffness: 55, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 55, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (event: PointerEvent): void => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      rawX.set(nx * 2 * strength);
      rawY.set(ny * 2 * strength);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY, strength, reduced]);

  return { x, y };
}