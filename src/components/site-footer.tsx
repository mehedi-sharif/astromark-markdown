import { brand } from "@/content/content";

export function SiteFooter() {
  const {
    brand: name,
    tagline,
    footer: { columns, social, copyright },
  } = brand.frontmatter;

  return (
    <footer className="border-t border-border/60 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-ink">{name}</span>
              <span className="text-sm text-muted-foreground">{tagline}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A calm, fast writing surface built around plain text. Your words, in your custody —
              today and a decade from now.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-terracotta"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-terracotta"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border/60 pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
