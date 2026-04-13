import { useRef } from "react";
import RevealText from "../components/motion/RevealText.jsx";
import Container from "../components/ui/Container.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import SectionEyebrow from "../components/ui/SectionEyebrow.jsx";
import { brand } from "../data/brand.js";
import { hero } from "../data/hero.js";
import useParallaxDecor from "../hooks/useParallaxDecor.js";
import useGsapContext from "../hooks/useGsapContext.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useSectionReveal from "../hooks/useSectionReveal.js";
import useSplitReveal from "../hooks/useSplitReveal.js";
import { gsap } from "../utils/gsap.js";

const HeroFilmSection = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useSplitReveal(sectionRef, { selector: "[data-split]", stagger: 0.04, duration: 1.15 });
  useSectionReveal(sectionRef, { selector: "[data-reveal]", y: 22, stagger: 0.08, duration: 0.8 });
  useParallaxDecor(sectionRef, { distance: 34, scrub: 0.8 });

  useGsapContext(
    () => {
      const root = sectionRef.current;

      if (!root || prefersReducedMotion) {
        return undefined;
      }

      const sequenceTargets = root.querySelectorAll("[data-hero-sequence]");
      const vessel = root.querySelector("[data-hero-vessel]");
      const notes = root.querySelectorAll("[data-hero-note]");
      const glow = root.querySelector("[data-hero-glow]");
      const media = root.querySelector("[data-hero-media]");
      const plaque = root.querySelector("[data-hero-plaque]");
      const leftNote = root.querySelector("[data-hero-note='left']");
      const rightNote = root.querySelector("[data-hero-note='right']");

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          sequenceTargets,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.08 },
        )
        .fromTo(
          vessel,
          { autoAlpha: 0, y: 24, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.05 },
          "-=0.4",
        )
        .fromTo(
          notes,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5",
        );

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      if (glow) {
        scrollTimeline.to(glow, { yPercent: -10, scale: 1.06, ease: "none" }, 0);
      }

      if (media) {
        scrollTimeline.to(media, { yPercent: -6, scale: 1.04, ease: "none" }, 0);
      }

      if (plaque) {
        scrollTimeline.to(plaque, { yPercent: -4, ease: "none" }, 0);
      }

      if (leftNote) {
        scrollTimeline.to(leftNote, { yPercent: -10, ease: "none" }, 0);
      }

      if (rightNote) {
        scrollTimeline.to(rightNote, { yPercent: 8, ease: "none" }, 0);
      }

      return () => {
        timeline.kill();
        scrollTimeline.kill();
      };
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  );

  return (
    <section id="hero" ref={sectionRef} className="section-shell overflow-hidden pt-10 sm:pt-14">
      <div
        className="ambient-orb right-[-4rem] top-14 h-56 w-56 bg-[rgba(227,207,175,0.45)] sm:h-64 sm:w-64"
        data-parallax
        data-speed="1.15"
      />
      <div
        className="ambient-orb left-[-3rem] top-[22rem] h-36 w-36 bg-[rgba(113,129,112,0.22)] sm:top-[24rem] sm:h-44 sm:w-44"
        data-parallax
        data-speed="0.8"
      />

      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-end lg:gap-12">
        <div className="flex max-w-3xl flex-col gap-6 lg:pb-8">
          <div data-reveal data-hero-sequence>
            <SectionEyebrow>{hero.eyebrow}</SectionEyebrow>
          </div>

          <div className="grid gap-4 sm:gap-5">
            <RevealText
              as="p"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)]"
              splitType="lines"
            >
              {brand.name}
            </RevealText>

            <RevealText as="h1" className="section-title max-w-4xl" splitType="lines">
              {hero.title}
            </RevealText>

            <RevealText
              as="p"
              className="max-w-2xl font-serif text-[clamp(1.3rem,2vw,2.1rem)] leading-[1.08] text-[var(--color-ink-muted)]"
              splitType="lines"
            >
              {hero.supportingLine}
            </RevealText>
          </div>

          <p className="lede-copy" data-reveal data-hero-sequence>
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-1" data-reveal data-hero-sequence>
            <a className="button-primary px-6" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="button-secondary px-6" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div
            className="grid gap-3 pt-2 sm:grid-cols-3"
            data-reveal
            data-hero-sequence
          >
            {hero.trustPoints.map((point) => (
              <div key={point} className="metric-chip px-4 py-3 text-sm leading-6">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-frame relative overflow-hidden p-4 sm:p-7" data-reveal>
          <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(33,28,24,0.18),transparent)]" />

          <div className="relative grid gap-5 sm:gap-6 lg:min-h-[39rem]">
            <div className="flex items-start justify-between gap-4" data-hero-sequence>
              <div className="max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
                  {hero.featuredProduct.label}
                </p>
                <p className="mt-3 font-serif text-[clamp(2.2rem,4vw,4rem)] leading-none tracking-[-0.05em]">
                  {hero.featuredProduct.name}
                </p>
              </div>

              <div className="metric-chip px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
                Slow, restrained, cinematic
              </div>
            </div>

            <div className="hero-vessel relative overflow-hidden p-3 sm:p-4" data-hero-vessel>
              <div
                className="absolute inset-x-[16%] top-8 h-[18rem] rounded-full bg-[radial-gradient(circle,rgba(227,207,175,0.88),rgba(227,207,175,0.08)_60%,transparent_75%)] opacity-80 sm:h-[22rem]"
                data-hero-glow
              />
              <div className="absolute inset-x-[8%] bottom-8 h-[8rem] rounded-full bg-[radial-gradient(circle,rgba(113,129,112,0.16),transparent_68%)] sm:h-[10rem]" />

              <MediaFrame
                className="media-frame relative isolate min-h-[26rem] overflow-hidden rounded-[28px] border border-[rgba(33,28,24,0.08)] bg-[rgba(255,255,255,0.42)] sm:min-h-[31rem]"
                mediaClassName="h-full min-h-[26rem] w-full object-cover sm:min-h-[31rem]"
                videoSrc={hero.media.videoSrc}
                videoType={hero.media.videoType}
                posterSrc={hero.media.posterSrc}
                alt={hero.media.alt}
                width={hero.media.width}
                height={hero.media.height}
                sizes={hero.media.sizes}
                objectPosition={hero.media.objectPosition}
                videoPreload={hero.media.videoPreload}
                priority
                decorative
                data-hero-media
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,245,238,0.04),rgba(33,28,24,0.12)_100%)]" />

                <div
                  className="absolute left-4 top-4 rounded-full border border-[rgba(255,255,255,0.35)] bg-white/62 px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-ink-soft)] shadow-[var(--shadow-card)] sm:left-6 sm:top-6"
                  data-hero-note="left"
                >
                  comfort layer
                </div>
                <div
                  className="absolute bottom-4 right-4 rounded-full border border-[rgba(255,255,255,0.35)] bg-white/62 px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-ink-soft)] shadow-[var(--shadow-card)] sm:bottom-6 sm:right-6"
                  data-hero-note="right"
                >
                  barrier support
                </div>

                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <div
                    className="mx-auto max-w-[21rem] rounded-[30px] border border-[rgba(255,255,255,0.42)] bg-[rgba(248,243,236,0.8)] p-5 backdrop-blur-md shadow-[0_24px_60px_rgba(33,28,24,0.12)]"
                    data-hero-plaque
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
                      {hero.featuredProduct.label}
                    </p>
                    <p className="mt-3 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[0.9] tracking-[-0.05em] text-[var(--color-ink)]">
                      {brand.shortName}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--color-sage)]">
                      {hero.featuredProduct.name}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Ceramides", "Panthenol", "Niacinamide"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-soft)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MediaFrame>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] border border-[var(--color-line)] bg-white/40 p-5" data-reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
                  Formula note
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">
                  {hero.featuredProduct.summary}
                </p>
              </div>

              <div className="rounded-[24px] border border-[var(--color-line)] bg-white/48 p-5" data-reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
                  Finish
                </p>
                <p className="mt-3 font-serif text-3xl leading-none tracking-[-0.04em]">
                  Soft sheen, no noise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroFilmSection;
