import { PORTRAIT_IMAGE, disciplines } from "@/data/portfolio";
import { MediaReveal, Reveal } from "./Reveal";
import { SectionMarker } from "./SectionHeading";

const TOOLS: readonly string[] = ["Photoshop", "Premiere Pro", "After Effects"];

export function About() {
  return (
    <section id="about" className="relative border-t border-border px-5 py-32 md:px-10 md:py-48">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <MediaReveal className="lg:col-span-6">
          <figure>
            <div className="vignette relative aspect-[4/5] w-full overflow-hidden bg-card">
              <img
                src={PORTRAIT_IMAGE}
                alt="Portrait of Kartik Pandey"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="label-xs mt-4 flex items-center justify-between gap-4 text-muted-foreground">
              <span>Kartik Pandey</span>
              <span>Based in India</span>
            </figcaption>
          </figure>
        </MediaReveal>

        <div className="flex flex-col justify-end lg:col-span-5 lg:col-start-8">
          <Reveal>
            <SectionMarker number="03" label="About Kartik" />
          </Reveal>
          <h2 className="mt-8 font-display text-[12vw] leading-[0.88] tracking-wide sm:text-6xl lg:text-7xl">
            <Reveal variant="mask" delay={0.05}>
              <span className="block">EDITING IS WHERE</span>
            </Reveal>
            <Reveal variant="mask" delay={0.12}>
              <span className="block text-muted-foreground">THE STORY IS FOUND.</span>
            </Reveal>
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Video and photo editor crafting visuals with rhythm, colour and detail — turning raw
              footage and images into work that connects.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-14">
            <p className="label-xs text-muted-foreground">Expertise</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-foreground">
              {disciplines.join("  /  ")}
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-12 border-t border-border pt-6">
            <p className="label-xs text-muted-foreground">Tools</p>
            <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {TOOLS.map((tool, i) => (
                <li key={tool} className="flex items-center gap-6">
                  {i > 0 ? <span aria-hidden="true" className="block h-px w-6 bg-border" /> : null}
                  <span className="font-display text-2xl tracking-wide md:text-3xl">{tool}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
