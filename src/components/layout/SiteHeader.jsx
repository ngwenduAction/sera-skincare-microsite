import { brand } from "../../data/brand.js";
import { navigation } from "../../data/navigation.js";
import Container from "../ui/Container.jsx";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(248,243,236,0.78)] backdrop-blur-xl">
      <Container className="py-3 sm:py-4">
        <nav className="flex items-center justify-between gap-4" aria-label="Primary">
          <a href="#hero" className="flex flex-col gap-1 transition-opacity duration-300 hover:opacity-85">
            <span className="font-serif text-[2rem] leading-none tracking-[-0.08em] sm:text-[2.3rem]">
              {brand.name}
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink-soft)]">
              {brand.tagline}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6 text-sm text-[var(--color-ink-muted)]">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    className="relative pb-1 transition-colors duration-300 hover:text-[var(--color-ink)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--color-ink)] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a className="button-primary px-6" href={brand.primaryCta.href}>
              {brand.primaryCta.label}
            </a>
          </div>

          <a className="button-secondary px-4 lg:hidden" href={brand.primaryCta.href}>
            Ritual
          </a>
        </nav>

        <nav className="mt-3 lg:hidden" aria-label="Section shortcuts">
          <ul className="flex gap-2 overflow-x-auto pb-1 text-sm text-[var(--color-ink-muted)]">
            {navigation.map((item) => (
              <li key={item.id} className="shrink-0">
                <a
                  className="metric-chip inline-flex px-4 py-2 transition-colors duration-300 hover:bg-white/80 hover:text-[var(--color-ink)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default SiteHeader;
