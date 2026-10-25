import { parseMarkdown } from "@/lib/markdown";

/* ---------- Types ---------- */

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  /** ISO date, e.g. 2026-10-20. Optional — undated posts still list. */
  date?: string;
  author: string;
  read_time: string;
  category: string;
  image?: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  body: string;
  html: string;
}

/* ---------- Template inheritance ---------- */

/**
 * Template defaults — every post inherits these unless its frontmatter
 * overrides them. This is the "inherit the template" behaviour: a new
 * post only needs `title`, `description` and `date`; the rest falls back
 * here. Edit `_template.md` to change the scaffold new posts start from.
 */
export const TEMPLATE_DEFAULTS: Partial<BlogPostFrontmatter> = {
  author: "Mehedi Sharif",
  category: "Writing",
  read_time: "5 min read",
  published: true,
};

/* ---------- Post discovery ---------- */

// Eager glob: Vite inlines the raw markdown at build time, so every
// `.md` file dropped into src/content/posts/ is picked up automatically.
const postModules = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function fileSlug(path: string): string {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "");
}

const allPosts: BlogPost[] = Object.entries(postModules)
  // Skip the template and any other `_`-prefixed files.
  .filter(([path]) => !fileSlug(path).startsWith("_"))
  .map(([path, raw]) => {
    const parsed = parseMarkdown<Partial<BlogPostFrontmatter>>(raw);
    const frontmatter = {
      ...TEMPLATE_DEFAULTS,
      ...parsed.frontmatter,
    } as BlogPostFrontmatter;
    return {
      slug: fileSlug(path),
      frontmatter,
      body: parsed.body,
      html: parsed.html,
    };
  })
  // List every published post — drafts (published: false) stay hidden.
  // Undated posts sort to the end so dated essays stay chronological.
  .filter((p) => p.frontmatter.published !== false)
  .sort((a, b) => {
    const ta = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
    const tb = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
    return tb - ta;
  });

export const posts: BlogPost[] = allPosts;

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  allPosts.map((p) => [p.slug, p]),
);

export function getPost(slug: string): BlogPost | undefined {
  return postsBySlug[slug];
}

export function getPostSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}
