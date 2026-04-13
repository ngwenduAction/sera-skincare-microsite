import { useRef } from "react";
import Container from "../components/ui/Container.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import SectionIntro from "../components/ui/SectionIntro.jsx";
import { ingredients } from "../data/ingredients.js";
import useSectionReveal from "../hooks/useSectionReveal.js";
import useSplitReveal from "../hooks/useSplitReveal.js";

const IngredientStorySection = () => {
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef);
  useSplitReveal(sectionRef, { selector: "[data-split]" });

  return (
    <section id="ingredients" ref={sectionRef} className="section-shell">
      <Container className="section-grid">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.62fr)] lg:items-end">
          <SectionIntro
            eyebrow="Ingredient Story"
            title="Actives selected for stressed skin, arranged with a softer hand."
            description="S\u00c9RA treats ingredient storytelling like editorial pacing rather than a spec sheet. Each active has a job to do, but each also contributes to how the formula feels on skin."
          />

          <div className="surface-panel surface-panel--soft p-6" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              Formulation stance
            </p>
            <p className="mt-4 font-serif text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.04em]">
              Calm first. Credible always.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-muted)]">
              Barrier support leads the brief, but sensorial softness matters just as much. The
              formulation story should read as calm, credible, and materially rich.
            </p>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-12">
          {ingredients.map((ingredient, index) => {
            const spanClass = index === 0 || index === 3 ? "xl:col-span-7" : "xl:col-span-5";

            return (
              <article
                key={ingredient.id}
                className={["surface-panel surface-panel--soft grid gap-6 p-6 sm:p-8", spanClass].join(" ")}
                data-reveal
              >
                <MediaFrame
                  className="media-frame overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-white/55"
                  mediaClassName="h-full min-h-[15rem] w-full object-cover sm:min-h-[17rem]"
                  imageSrc={ingredient.media.src}
                  alt={ingredient.media.alt}
                  width={ingredient.media.width}
                  height={ingredient.media.height}
                  sizes={ingredient.media.sizes}
                  objectPosition={ingredient.media.objectPosition}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-sage)]">
                      {ingredient.profile}
                    </p>
                    <h3 className="mt-3 font-serif text-[clamp(2.5rem,3.2vw,4rem)] leading-[0.92] tracking-[-0.05em]">
                      {ingredient.name}
                    </h3>
                  </div>

                  <div className="metric-chip px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
                    {ingredient.benefit}
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
                  <div className="grid gap-4">
                    <p className="section-copy max-w-none">{ingredient.description}</p>
                    <p className="text-sm leading-7 text-[var(--color-ink-soft)]">
                      {ingredient.evidenceNote}
                    </p>
                  </div>

                  <div className="rounded-[26px] border border-[var(--color-line)] bg-white/55 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                      Skin feel
                    </p>
                    <p className="mt-3 font-serif text-[1.8rem] leading-[1.02] tracking-[-0.04em]">
                      {ingredient.sensory}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default IngredientStorySection;
