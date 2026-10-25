import { ArrowRight } from "lucide-react";

import { home, heroImage } from "@/content/content";

export function Hero() {
  const { hero, stats } = home.frontmatter;

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-paper">
      {/* Warm texture backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-paper/70 via-paper/85 to-paper"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-deep">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              {hero.primary_cta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border bg-paper/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-ink/40"
            >
              {hero.secondary_cta}
            </a>
          </div>

          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-ink sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
