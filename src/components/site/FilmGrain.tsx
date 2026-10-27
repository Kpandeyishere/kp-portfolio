const NOISE_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

type FilmGrainProps = {
  /** `fixed` for the page-wide layer, `absolute` inside a positioned element. */
  position?: "fixed" | "absolute";
  opacity?: number;
};

export function FilmGrain({ position = "fixed", opacity = 0.16 }: FilmGrainProps) {
  return (
    <div
      aria-hidden="true"
      className={`${position} inset-0 z-50 pointer-events-none mix-blend-soft-light`}
      style={{ backgroundImage: NOISE_URI, opacity }}
    />
  );
}