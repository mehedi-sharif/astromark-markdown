import { createFileRoute } from "@tanstack/react-router";

import { home, heroImage } from "@/content/content";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => {
    const { hero } = home.frontmatter;
    return {
      meta: [
        { title: "Quill — Markdown-native writing, refined" },
        {
          name: "description",
          content: hero.subtitle,
        },
        { property: "og:title", content: "Quill — Markdown-native writing, refined" },
        { property: "og:description", content: hero.subtitle },
        { property: "og:image", content: heroImage },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: heroImage },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
