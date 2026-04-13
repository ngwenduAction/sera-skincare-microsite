import { gsap } from "../utils/gsap.js";
import useGsapContext from "./useGsapContext.js";
import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

const useParallaxDecor = (
  rootRef,
  {
    selector = "[data-parallax]",
    start = "top bottom",
    end = "bottom top",
    distance = 80,
    scrub = true,
  } = {},
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapContext(
    () => {
      const root = rootRef.current;

      if (!root) {
        return undefined;
      }

      const elements = Array.from(root.querySelectorAll(selector));

      if (!elements.length) {
        return undefined;
      }

      if (prefersReducedMotion) {
        gsap.set(elements, { y: 0 });
        return undefined;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start,
          end,
          scrub,
        },
      });

      elements.forEach((element, index) => {
        const speed = Number(element.dataset.speed || 1);
        const direction = index % 2 === 0 ? 1 : -1;

        timeline.to(
          element,
          {
            y: distance * speed * direction,
            ease: "none",
          },
          0,
        );
      });

      return () => {
        timeline.kill();
      };
    },
    { scope: rootRef, dependencies: [prefersReducedMotion, selector, start, end, distance, scrub] },
  );
};

export default useParallaxDecor;
