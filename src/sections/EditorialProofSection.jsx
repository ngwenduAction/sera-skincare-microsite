import { useRef } from "react";
import Container from "../components/ui/Container.jsx";
import SectionIntro from "../components/ui/SectionIntro.jsx";
import { proof } from "../data/proof.js";
import useSectionReveal from "../hooks/useSectionReveal.js";
import useSplitReveal from "../hooks/useSplitReveal.js";

const EditorialProofSection = () => {
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef);
  useSplitReveal(sectionRef, { selector: "[data-split]" });

  return (
    <section id="proof" ref={sectionRef} className="section-shell">
      <Container className="section-grid">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.66fr)] lg:items-end">
          <SectionIntro
            eyebrow={proof.eyebrow}
            title={proof.title}
            description={proof.description}
          />

          <aside className="surface-panel surface-panel--soft p-6" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
              Campaign Quote
            </p>
            <blockquote className="mt-4 font-serif text-[clamp(2rem,3vw,3rem)] leading-[0.98] tracking-[-0.04em]">
              "{proof.testimonial.quote}"
            </blockquote>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[var(--color-sage)]">
              {proof.testimonial.source}
            </p>
          </aside>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {proof.stats.map((stat) => (
            <article key={stat.label} className="surface-panel surface-panel--soft p-6 sm:p-7" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                Measured result
              </p>
              <p className="mt-5 font-serif text-[clamp(3.5rem,5vw,5rem)] leading-none tracking-[-0.06em]">
                {stat.value}
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--color-ink-muted)]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="surface-panel p-6 sm:p-8" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
            Proof Themes
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {proof.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-[24px] border border-[var(--color-line)] bg-white/44 p-5 text-sm leading-7 text-[var(--color-ink-muted)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default EditorialProofSection;
