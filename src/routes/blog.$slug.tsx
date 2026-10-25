import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getPost, posts } from "@/lib/blog";
import { Markdown } from "@/components/markdown";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) {
      return {
        meta: [{ title: "Not found — Mehedi Sharif" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${post.frontmatter.title} — Mehedi Sharif` },
        { name: "description", content: post.frontmatter.description },
        { property: "og:title", content: `${post.frontmatter.title} — Mehedi Sharif` },
        { property: "og:description", content: post.frontmatter.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const fm = post.frontmatter;
  const idx = posts.findIndex((p) => p.slug === slug);
  const next = idx >= 0 ? posts[idx + 1] : undefined;

  return (
    <article>
      <header className="border-b border-border/60 bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            {fm.category}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {fm.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{fm.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-ink">{fm.author}</span>
            <span aria-hidden>·</span>
            <time>{formatDate(fm.date)}</time>
            <span aria-hidden>·</span>
            <span>{fm.read_time}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Markdown html={post.html} />

        {next && (
          <div className="mt-16 border-t border-border/60 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Next essay
            </p>
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group mt-3 inline-flex items-center gap-2 font-display text-2xl text-ink"
            >
              {next.frontmatter.title}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-display text-6xl text-ink">404</p>
      <h1 className="mt-4 font-display text-3xl text-ink">Post not found</h1>
      <p className="mt-3 text-muted-foreground">That essay doesn't exist, or it may have moved.</p>
      <Link
        to="/blog"
        className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
