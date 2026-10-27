import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** e.g. "01" */
  number?: string;
  /** e.g. "Work" */
  label?: string;
  title: string;
  subtitle?: string;
};

/** Quiet numbered marker: 01 ——— WORK */
export function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <p className="label-xs flex items-center gap-4 text-muted-foreground">
      <span className="text-accent">{number}</span>
      <span aria-hidden="true" className="block h-px w-10 bg-border" />
      <span>{label}</span>
    </p>
  );
}

export function SectionHeading({ number, label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      {number && label ? (
        <Reveal>
          <SectionMarker number={number} label={label} />
        </Reveal>
      ) : null}
      <h2 className="mt-6 font-display text-[14vw] leading-[0.86] tracking-wide sm:text-7xl lg:text-8xl">
        <Reveal variant="mask" delay={0.05}>
          <span className="block">{title}</span>
        </Reveal>
      </h2>
      {subtitle ? (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-md text-base text-muted-foreground">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
