import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { brand } from "@/content/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { brand: name, tagline, nav, cta_label, cta_href } = brand.frontmatter;
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl leading-none text-ink">{name}</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">{tagline}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavAnchor
              key={item.href}
              item={item}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={cta_href}
            className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            {cta_label}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-paper md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <NavAnchor
                key={item.href}
                item={item}
                onNavigate={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-base font-medium text-ink",
                  "transition-colors hover:bg-sand",
                )}
              />
            ))}
            <a
              href={cta_href}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
            >
              {cta_label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

/**
 * Renders a nav item as a client-side <Link> for real routes (href starts
 * with "/") and a plain <a> for in-page hash anchors (href starts with "#").
 */
function NavAnchor({
  item,
  className,
  onNavigate,
}: {
  item: { label: string; href: string };
  className?: string;
  onNavigate?: () => void;
}) {
  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} onClick={onNavigate} className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.href as never} onClick={onNavigate} className={className}>
      {item.label}
    </Link>
  );
}
