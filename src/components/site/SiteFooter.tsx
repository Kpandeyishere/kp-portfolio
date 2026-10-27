import { navLinks } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12 md:px-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="font-display text-4xl tracking-wide md:text-5xl">KARTIK PANDEY</p>
          <p className="label-xs mt-3 text-muted-foreground">Video Editor • Photo Editor</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="label-xs link-underline text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
      <p className="label-xs mt-12 border-t border-border pt-6 text-muted-foreground">
        © 2026 Kartik Pandey. All rights reserved.
      </p>
    </footer>
  );
}