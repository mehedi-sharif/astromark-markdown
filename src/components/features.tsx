import { PenLine, Zap, GitBranch, Share2, Moon, ShieldCheck, type LucideIcon } from "lucide-react";

import { features } from "@/content/content";
import { Markdown } from "@/components/markdown";

const ICONS: Record<string, LucideIcon> = {
  PenLine,
  Zap,
  GitBranch,
  Share2,
  Moon,
  ShieldCheck,
};

export function Features() {
  const { intro, features: items } = features.frontmatter;

  return (
    <section id="features" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Features
          </p>
          <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => {
            const Icon = ICONS[f.icon] ?? PenLine;
            return (
              <div
                key={f.title}
                className="group relative bg-paper p-8 transition-colors hover:bg-cream"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sand text-terracotta-deep transition-colors group-hover:bg-terracotta group-hover:text-paper">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">{f.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl">
          <Markdown html={features.html} />
        </div>
      </div>
    </section>
  );
}
