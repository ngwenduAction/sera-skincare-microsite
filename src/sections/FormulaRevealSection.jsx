import { useRef } from "react";
import Container from "../components/ui/Container.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import SectionEyebrow from "../components/ui/SectionEyebrow.jsx";
import RevealText from "../components/motion/RevealText.jsx";
import { formula } from "../data/formula.js";
import useParallaxDecor from "../hooks/useParallaxDecor.js";
import useGsapContext from "../hooks/useGsapContext.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useSectionReveal from "../hooks/useSectionReveal.js";
import useSplitReveal from "../hooks/useSplitReveal.js";
import { gsap } from "../utils/gsap.js";

const FormulaRevealSection = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useSectionReveal(sectionRef, { selector: "[data-reveal]", y: 22, stagger: 0.08, duration: 0.85 });
  useSplitReveal(sectionRef, { selector: "[data-split]", stagger: 0.04, duration: 1.05 });
  useParallaxDecor(sectionRef, { distance: 46, scrub: 0.9 });

  useGsapContext(
    () => {
      const root = sectionRef.current;

      if (!root || prefersReducedMotion) {
        return undefined;
      }

      const stage = root.querySelector("[data-formula-stage]");
      const glow = root.querySelector("[data-formula-glow]");
      const rings = root.querySelectorAll("[data-formula-ring]");
      const chips = root.querySelectorAll("[data-formula-chip]");
      const card = root.querySelector("[data-formula-card]");
      const media = root.querySelector("[data-formula-media]");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 68%",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      if (stage) {
        timeline.fromTo(
          stage,
          { y: 28, scale: 0.98, autoAlpha: 0.88 },
          { y: -10, scale: 1.02, autoAlpha: 1, ease: "none" },
          0,
        );
      }

      if (glow) {
        timeline.fromTo(
          glow,
          { scale: 0.8, autoAlpha: 0.65 },
          { scale: 1.16, autoAlpha: 1, ease: "none" },
          0,
        );
      }

      if (rings.length) {
        timeline.fromTo(
          rings,
          { scale: 0.94, autoAlpha: 0.35 },
          { scale: 1.08, autoAlpha: 0.75, stagger: 0.06, ease: "none" },
          0,
        );
      }

      if (chips.length) {
        timeline.fromTo(
          chips,
          { y: 0 },
          { y: (_index, target) => Number(target.dataset.offset || 0), ease: "none" },
          0,
        );
      }

      if (card) {
        timeline.fromTo(card, { y: 0 }, { y: -14, ease: "none" }, 0);
      }

      if (media) {
        timeline.fromTo(media, { scale: 1.01 }, { scale: 1.08, ease: "none" }, 0);
      }

      return () => {
        timeline.kill();
      };
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  );

  return (
    <section
      id="formula"
      ref={sectionRef}
      className="section-shell overflow-hidden"
      data-tone="contrast"
    >
      <div
        className="ambient-orb left-[6%] top-[8rem] h-48 w-48 bg-[rgba(227,207,175,0.18)] sm:h-52 sm:w-52"
        data-parallax
        data-speed="1"
      />
      <div
        className="ambient-orb right-[8%] top-[17rem] h-36 w-36 bg-[rgba(255,255,255,0.08)] sm:h-40 sm:w-40"
        data-parallax
        data-speed="1.15"
      />

      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,1.18fr)] lg:items-center">
        <div className="grid gap-7">
          <div data-reveal>
            <SectionEyebrow className="border-white/10 bg-white/6 text-white/70">
              {formula.eyebrow}
            </SectionEyebrow>
          </div>

          <RevealText
            as="h2"
            className="font-serif text-[clamp(2.7rem,5.6vw,5.6rem)] leading-[0.9] tracking-[-0.05em]"
            splitType="lines"
          >
            {formula.title}
          </RevealText>

          <p className="max-w-xl text-base leading-8 text-white/72" data-reveal>
            {formula.description}
          </p>

          <div className="grid gap-4" data-reveal>
            {formula.notes.map((note) => (
              <div
                key={note.label}
                className="flex items-center justify-between gap-4 border-b border-white/10 py-4 text-white/78"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  {note.label}
                </span>
                <span className="font-serif text-[1.6rem] leading-none tracking-[-0.04em] sm:text-[1.8rem]">
                  {note.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel surface-panel--contrast relative overflow-hidden p-4 sm:p-7" data-reveal>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(227,207,175,0.16),transparent_42%)]" />
          <div className="relative grid gap-5 sm:gap-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
                {formula.label}
              </p>
              <p className="rounded-full border border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/56">
                {formula.badge}
              </p>
            </div>

            <div
              className="grid min-h-[28rem] place-items-center overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:min-h-[35rem] sm:rounded-[34px] sm:p-6"
              data-formula-stage
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <div
                  className="absolute h-[22rem] w-[22rem] rounded-full border border-[rgba(255,255,255,0.08)] sm:h-[26rem] sm:w-[26rem]"
                  data-formula-ring
                />
                <div
                  className="absolute h-[15rem] w-[15rem] rounded-full border border-[rgba(255,255,255,0.08)] sm:h-[18rem] sm:w-[18rem]"
                  data-formula-ring
                />
                <div
                  className="absolute h-[10rem] w-[10rem] rounded-full bg-[radial-gradient(circle,rgba(227,207,175,0.95),rgba(227,207,175,0.1)_58%,transparent_72%)] sm:h-[12rem] sm:w-[12rem]"
                  data-formula-glow
                />

                <div
                  className="absolute left-[10%] top-[18%] rounded-full border border-white/10 bg-white/6 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/62"
                  data-formula-chip
                  data-offset="-18"
                >
                  cushion
                </div>
                <div
                  className="absolute right-[9%] top-[47%] rounded-full border border-white/10 bg-white/6 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/62"
                  data-formula-chip
                  data-offset="12"
                >
                  repair
                </div>
                <div
                  className="absolute bottom-[14%] left-[16%] rounded-full border border-white/10 bg-white/6 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/62"
                  data-formula-chip
                  data-offset="-10"
                >
                  radiance
                </div>

                <div
                  className="relative w-full max-w-[17rem] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:max-w-[19rem] sm:rounded-[34px] sm:p-5"
                  data-formula-card
                >
                  <MediaFrame
                    className="media-frame overflow-hidden rounded-[26px] border border-white/10 bg-white/4"
                    mediaClassName="h-full min-h-[18rem] w-full object-cover sm:min-h-[22rem]"
                    videoSrc={formula.media.videoSrc}
                    videoType={formula.media.videoType}
                    posterSrc={formula.media.posterSrc}
                    alt={formula.media.alt}
                    width={formula.media.width}
                    height={formula.media.height}
                    sizes={formula.media.sizes}
                    objectPosition={formula.media.objectPosition}
                    videoPreload={formula.media.videoPreload}
                    data-formula-media
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(27,23,20,0.14)_100%)]" />
                  </MediaFrame>
                  <div className="mt-6">
                    <p className="font-serif text-4xl leading-none tracking-[-0.06em] text-white">
                      S\u00c9RA
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/54">
                      macro texture study
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {formula.cues.map((word) => (
                <div
                  key={word}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-white/82"
                  data-reveal
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Sensory cue
                  </p>
                  <p className="mt-4 font-serif text-4xl leading-none tracking-[-0.04em]">
                    {word}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FormulaRevealSection;
