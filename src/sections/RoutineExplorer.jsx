import { useRef, useState } from "react";
import Container from "../components/ui/Container.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import SectionIntro from "../components/ui/SectionIntro.jsx";
import { rituals } from "../data/rituals.js";
import useGsapContext from "../hooks/useGsapContext.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useSectionReveal from "../hooks/useSectionReveal.js";
import { gsap } from "../utils/gsap.js";

const RoutineExplorer = () => {
  const sectionRef = useRef(null);
  const [activeRoutineId, setActiveRoutineId] = useState(rituals[0]?.id ?? "");
  const prefersReducedMotion = usePrefersReducedMotion();

  useSectionReveal(sectionRef);

  useGsapContext(
    () => {
      const root = sectionRef.current;

      if (!root) {
        return undefined;
      }

      const panel = root.querySelector("[data-routine-panel]");
      const steps = root.querySelectorAll("[data-routine-step]");
      const meta = root.querySelectorAll("[data-routine-meta]");
      const visual = root.querySelector("[data-routine-media]");

      if (prefersReducedMotion) {
        gsap.set([panel, visual, ...steps, ...meta], { clearProps: "all", autoAlpha: 1, y: 0 });
        return undefined;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .fromTo(
          panel,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.45 },
        )
        .fromTo(
          visual,
          { autoAlpha: 0, y: 16, scale: 0.985 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.42 },
          "-=0.22",
        )
        .fromTo(
          meta,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06 },
          "-=0.25",
        )
        .fromTo(
          steps,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.08 },
          "-=0.2",
        );

      return () => {
        timeline.kill();
      };
    },
    { scope: sectionRef, dependencies: [activeRoutineId, prefersReducedMotion] },
  );

  const activeRoutine =
    rituals.find((ritual) => ritual.id === activeRoutineId) ?? rituals[0];

  return (
    <section id="routine" ref={sectionRef} className="section-shell" data-tone="soft">
      <Container className="section-grid">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.62fr)] lg:items-end">
          <SectionIntro
            eyebrow="Routine Explorer"
            title="A ritual structure that feels useful, not overbuilt."
            description="The interaction stays intentionally calm. Instead of mimicking a demo carousel, the section makes the sequence, timing, and outcome legible at a glance."
          />

          <div className="surface-panel surface-panel--soft p-6" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
              Ritual philosophy
            </p>
            <p className="mt-3 font-serif text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.04em]">
              Less correction. More composure.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="surface-panel surface-panel--soft flex flex-col gap-3 p-4" data-reveal aria-label="Ritual selector">
            {rituals.map((ritual) => {
              const isActive = ritual.id === activeRoutine.id;

              return (
                <button
                  key={ritual.id}
                  type="button"
                  aria-pressed={isActive}
                  className={[
                    "rounded-[26px] border px-5 py-5 text-left transition-all duration-300",
                    isActive
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-[0_18px_40px_rgba(33,28,24,0.16)]"
                      : "border-[var(--color-line)] bg-white/56 text-[var(--color-ink)] hover:bg-white/80",
                  ].join(" ")}
                  onClick={() => setActiveRoutineId(ritual.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-65">
                        {ritual.eyebrow}
                      </p>
                      <p className="mt-3 font-serif text-[2.1rem] leading-none tracking-[-0.05em]">
                        {ritual.label}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-55">
                      {ritual.cadence}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 opacity-78">{ritual.result}</p>
                </button>
              );
            })}
          </div>

          <article className="surface-panel grid gap-8 p-6 sm:p-8 lg:p-10" data-routine-panel aria-live="polite">
            <header className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
              <div className="max-w-2xl" data-routine-meta>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                  {activeRoutine.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4.8rem)] leading-[0.92] tracking-[-0.05em]">
                  {activeRoutine.title}
                </h3>
                <p className="mt-5 section-copy max-w-none">{activeRoutine.description}</p>
              </div>

              <div className="grid gap-4">
                <MediaFrame
                  className="media-frame overflow-hidden rounded-[30px] border border-[var(--color-line)] bg-white/64"
                  mediaClassName="h-full min-h-[19rem] w-full object-cover"
                  imageSrc={activeRoutine.media.src}
                  alt={activeRoutine.media.alt}
                  width={activeRoutine.media.width}
                  height={activeRoutine.media.height}
                  sizes={activeRoutine.media.sizes}
                  objectPosition={activeRoutine.media.objectPosition}
                  data-routine-media
                />

                <div
                  className="rounded-[28px] border border-[var(--color-line)] bg-white/62 p-6"
                  data-routine-meta
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                    Outcome
                  </p>
                  <p className="mt-4 font-serif text-[2.3rem] leading-[0.95] tracking-[-0.05em]">
                    {activeRoutine.result}
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-sage)]">
                    {activeRoutine.cadence}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-ink-muted)]">
                    {activeRoutine.media.caption}
                  </p>
                </div>
              </div>
            </header>

            <ol className="grid gap-4 md:grid-cols-3">
              {activeRoutine.steps.map((step) => (
                <li
                  key={step.id}
                  className="rounded-[28px] border border-[var(--color-line)] bg-white/52 p-5 transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transform-none"
                  data-routine-step
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      {step.order}
                    </p>
                    <span className="h-px flex-1 bg-[rgba(33,28,24,0.1)]" />
                  </div>

                  <h4 className="mt-5 font-serif text-[2rem] leading-[0.95] tracking-[-0.04em]">
                    {step.name}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-ink-muted)]">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default RoutineExplorer;
