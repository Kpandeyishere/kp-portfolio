import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const contactLinks = [
  {
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/kartik-pandey-4815a8220/",
    icon: Linkedin,
  },
  {
    label: "Email",
    detail: "kartikpandeywork@gmail.com",
    href: "mailto:kartikpandeywork@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    detail: "@kpedits_07",
    href: "https://www.instagram.com/kpedits_07/",
    icon: Instagram,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-5 py-16 md:px-10 md:py-20"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
            Contact
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="https://www.instagram.com/kpedits_07/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="group inline-flex items-center gap-3 border-b border-border py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <Reveal key={link.label} delay={index * 0.1}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={
                  link.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                data-cursor="link"
                className="group flex h-full min-h-24 items-center gap-4 border border-border p-5 transition-colors duration-300 hover:border-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium tracking-wide">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-words text-sm text-muted-foreground">
                    {link.detail}
                  </span>
                </span>

                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}