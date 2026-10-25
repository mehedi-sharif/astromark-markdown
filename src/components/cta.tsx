import { ArrowRight } from "lucide-react";

import { home, heroImage } from "@/content/content";

export function Cta() {
  const { cta } = home.frontmatter;

  return (
    <section id="cta" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink/15 bg-ink px-8 py-16 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
              {cta.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-paper sm:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
              {cta.body}
            </p>
            <a
              href="#"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              {cta.button}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
