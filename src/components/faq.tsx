import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { faq } from "@/content/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const { intro, items } = faq.frontmatter;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-b border-border/60 bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">FAQ</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Questions, answered plainly.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-xl text-ink">{item.question}</span>
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isOpen
                        ? "border-terracotta bg-terracotta text-paper"
                        : "border-border text-terracotta-deep",
                    )}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-[0.975rem] leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
