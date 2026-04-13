import { gsap } from "../utils/gsap.js";
import useGsapContext from "./useGsapContext.js";
import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

const usePinnedMediaScrub = (
  sectionRef,
  mediaRef,
  {
    start = "top top",
    end = "+=120%",
    scrub = true,
  } = {},
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapContext(
    () => {
      const section = sectionRef.current;
      const media = mediaRef.current;

      if (!section || !media || prefersReducedMotion || media.tagName !== "VIDEO") {
        return undefined;
      }

      let timeline;

      const createTimeline = () => {
        if (!media.duration || Number.isNaN(media.duration)) {
          return;
        }

        timeline?.kill();

        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start,
            end,
            scrub,
            pin: true,
          },
        });

        timeline.fromTo(
          media,
          { currentTime: 0 },
          {
            currentTime: media.duration,
            ease: "none",
          },
        );
      };

      media.addEventListener("loadedmetadata", createTimeline);
      createTimeline();

      return () => {
        media.removeEventListener("loadedmetadata", createTimeline);
        timeline?.kill();
      };
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion, start, end, scrub] },
  );
};

export default usePinnedMediaScrub;
