import { ArrowRight } from "lucide-react";
import { CONTACT_URL } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-5 py-16 md:px-10 md:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <h2 className="font-display text-4xl tracking-wide sm:text-5xl">Contact</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="link"
            className="group inline-flex items-center gap-3 border-b border-border py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
