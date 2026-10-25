import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Mehedi Sharif" },
      {
        name: "description",
        content: "Essays on markdown, plain text, and writing tools that respect your words.",
      },
      { property: "og:title", content: "Blog — Mehedi Sharif" },
      {
        property: "og:description",
        content: "Essays on markdown, plain text, and writing tools that respect your words.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-border/60 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-deep">
            The Blog
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Notes on plain text, writing tools, and staying portable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Essays from inside the workshop — why markdown, what we're building, and how to keep
            your words yours.
          </p>
        </div>
      </section>

      {featured && (
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                  Featured · {featured.frontmatter.category}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
                  {featured.frontmatter.title}
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {featured.frontmatter.description}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{featured.frontmatter.author}</span>
                  <span aria-hidden>·</span>
                  <time>{formatDate(featured.frontmatter.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{featured.frontmatter.read_time}</span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Read the essay
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="rounded-3xl border border-border bg-cream p-10">
                <p className="font-display text-2xl leading-snug text-ink">
                  &ldquo;{featured.frontmatter.description}&rdquo;
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  {featured.frontmatter.category} · {featured.frontmatter.read_time}
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col bg-paper p-8 transition-colors hover:bg-cream"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {p.frontmatter.category}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-snug text-ink">
                  {p.frontmatter.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {p.frontmatter.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                  <time>{formatDate(p.frontmatter.date)}</time>
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                    Read
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
