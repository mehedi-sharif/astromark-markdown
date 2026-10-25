import { marked } from "marked";
import { load as yamlLoad } from "js-yaml";

export interface ParsedMarkdown<T = Record<string, unknown>> {
  frontmatter: T;
  body: string;
  html: string;
}

// Configure marked once: synchronous, GFM, clean output.
marked.setOptions({ gfm: true, breaks: false });

const FRONTMATTER_RE = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/;

/**
 * Parse a Markdown string with YAML frontmatter into structured data.
 *
 * - Frontmatter (between leading `---` fences) is decoded with js-yaml.
 * - The remaining body is rendered to HTML with marked.
 *
 * Use this on raw `?raw` imports of `.md` content files.
 */
export function parseMarkdown<T = Record<string, unknown>>(raw: string): ParsedMarkdown<T> {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    const body = raw;
    return {
      frontmatter: {} as T,
      body,
      html: marked.parse(body) as string,
    };
  }

  const [, fmRaw, bodyRaw] = match;
  const frontmatter = (yamlLoad(fmRaw ?? "") ?? {}) as T;
  const body = bodyRaw ?? "";
  const html = marked.parse(body) as string;

  return { frontmatter, body, html };
}
