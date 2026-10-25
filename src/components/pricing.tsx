import { Check } from "lucide-react";

import { pricing } from "@/content/content";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { intro, plans } = pricing.frontmatter;

  return (
    <section id="pricing" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Plain pricing for plain text.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8 transition-shadow",
                plan.highlighted
                  ? "border-ink bg-ink text-paper shadow-xl"
                  : "border-border bg-paper text-ink shadow-sm",
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-paper">
                  Most popular
                </span>
              ) : null}

              <h3
                className={cn(
                  "font-display text-2xl",
                  plan.highlighted ? "text-paper" : "text-ink",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  plan.highlighted ? "text-paper/70" : "text-muted-foreground",
                )}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl">{plan.price}</span>
                <span
                  className={cn(
                    "text-sm",
                    plan.highlighted ? "text-paper/60" : "text-muted-foreground",
                  )}
                >
                  /{plan.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.highlighted ? "text-terracotta" : "text-terracotta-deep",
                      )}
                    />
                    <span
                      className={cn(plan.highlighted ? "text-paper/90" : "text-muted-foreground")}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                  plan.highlighted
                    ? "bg-terracotta text-paper"
                    : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
