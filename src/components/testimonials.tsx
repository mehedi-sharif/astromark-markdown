import { testimonials } from "@/content/content";

export function Testimonials() {
  const { testimonials: items } = testimonials.frontmatter;

  return (
    <section id="testimonials" className="scroll-mt-20 border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Reviews
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Words from people who switched.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-paper p-8 shadow-sm"
            >
              <blockquote className="flex-1 text-lg leading-relaxed text-ink">
                <span className="font-display text-4xl leading-none text-terracotta">&ldquo;</span>
                <span className="-mt-2 block">{t.quote}</span>
              </blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-5">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
