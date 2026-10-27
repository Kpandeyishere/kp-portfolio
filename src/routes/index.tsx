import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FilmGrain } from "@/components/site/FilmGrain";
import { CustomCursor } from "@/components/site/CustomCursor";

const TITLE = "Kartik Pandey — Video Editor & Photo Editor";
const DESCRIPTION = "Video editing and Photoshop work by Kartik Pandey.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FilmGrain position="fixed" opacity={0.09} />
      <CustomCursor />
      <SiteNav />
      <main>
        <Hero />
        <SelectedWork />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
