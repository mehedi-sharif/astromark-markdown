import { cn } from "@/lib/utils";

/**
 * Renders parsed Markdown HTML inside a `.markdown` container whose typography
 * is styled in src/styles.css. Pass the `html` string from `parseMarkdown()`.
 */
export function Markdown({ html, className }: { html: string; className?: string }) {
  return <div className={cn("markdown", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
