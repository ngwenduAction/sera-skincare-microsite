import { useRef } from "react";
import Container from "../components/ui/Container.jsx";
import MediaFrame from "../components/ui/MediaFrame.jsx";
import SectionIntro from "../components/ui/SectionIntro.jsx";
import { founder } from "../data/founder.js";
import useSectionReveal from "../hooks/useSectionReveal.js";

const FounderManifestoSection = () => {
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef);

  return (
    <section id="founder" ref={sectionRef} className="section-shell" data-tone="soft">
      <Container className="grid gap-10 lg:grid-cols-[minmax(300px,0.42fr)_minmax(0,1fr)] lg:items-start">
        <div className="surface-panel surface-panel--soft p-6 sm:p-8" data-reveal>
          <div className="grid gap-5">
            <MediaFrame
              className="media-frame overflow-hidden rounded-[30px] border border-[var(--color-line)] bg-white/56"
              mediaClassName="h-full min-h-[28rem] w-full object-cover"
              imageSrc={founder.media.src}
              alt={founder.media.alt}
              width={founder.media.width}
              height={founder.media.height}
              sizes={founder.media.sizes}
              objectPosition={founder.media.objectPosition}
            />

            <div className="w-full rounded-[26px] border border-[var(--color-line)] bg-white/56 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                {founder.media.eyebrow}
              </p>
              <p className="mt-4 font-serif text-[clamp(2.2rem,3vw,3.2rem)] leading-none tracking-[-0.05em]">
                {founder.name}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-sage)]">
                {founder.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-muted)]">
                {founder.media.note}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          <SectionIntro
            eyebrow={founder.eyebrow}
            title={founder.title}
            description={founder.summary}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {founder.values.map((value) => (
              <article key={value} className="surface-panel surface-panel--soft p-5 sm:p-6" data-reveal>
                <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{value}</p>
              </article>
            ))}
          </div>

          <blockquote
            className="surface-panel surface-panel--soft p-6 font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.02] tracking-[-0.04em]"
            data-reveal
          >
            {founder.closing}
          </blockquote>
        </div>
      </Container>
    </section>
  );
};

export default FounderManifestoSection;
