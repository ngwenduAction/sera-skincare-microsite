import { useRef } from "react";
import Container from "../components/ui/Container.jsx";
import { brand } from "../data/brand.js";
import { footer } from "../data/footer.js";
import useSectionReveal from "../hooks/useSectionReveal.js";

const ConversionFooter = () => {
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef);

  return (
    <footer id="conversion" ref={sectionRef} className="section-shell" data-tone="contrast">
      <Container className="grid gap-8">
        <div className="surface-panel surface-panel--contrast grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-3xl" data-reveal>
            <p className="section-eyebrow border-white/10 bg-white/5 text-white/70">
              Conversion
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.9rem,5vw,5.1rem)] leading-[0.93] tracking-[-0.04em]">
              {footer.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              {footer.description}
            </p>
          </div>

          <div className="grid gap-4" data-reveal>
            <a
              className="button-primary bg-[var(--color-glow)] px-6 text-[var(--color-ink)] hover:bg-[#ecd9bb]"
              href={footer.primaryCta.href}
            >
              {footer.primaryCta.label}
            </a>
            <div
              id="waitlist"
              className="rounded-[26px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/68"
            >
              Email concierge at{" "}
              <a className="text-white underline underline-offset-4 hover:text-[var(--color-glow)]" href={`mailto:${footer.support.email}`}>
                {footer.support.email}
              </a>{" "}
              for launch access, press notes, or retail enquiries.
            </div>
          </div>
        </div>

        <div className="grid gap-6 text-sm text-white/68 md:grid-cols-[minmax(0,1fr)_repeat(2,220px)]">
          <div data-reveal>
            <p className="font-serif text-[2.4rem] leading-none tracking-[-0.08em] text-white">
              {brand.name}
            </p>
            <p className="mt-4 max-w-md leading-7">{brand.positioning}</p>
            <p className="mt-6">{footer.support.email}</p>
            <p>{footer.support.note}</p>
          </div>

          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/46">Support</p>
            <ul className="mt-4 grid gap-3">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a className="transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/46">Social</p>
            <ul className="mt-4 grid gap-3">
              {footer.socials.map((item) => (
                <li key={item.label}>
                  <a
                    className="transition-colors hover:text-white"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default ConversionFooter;
