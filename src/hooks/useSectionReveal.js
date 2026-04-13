import { gsap } from "../utils/gsap.js";
import useGsapContext from "./useGsapContext.js";
import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

const useSectionReveal = (
  rootRef,
  {
    selector = "[data-reveal]",
    start = "top 80%",
    y = 32,
    stagger = 0.12,
    duration = 0.9,
    once = true,
  } = {},
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapContext(
    () => {
      const root = rootRef.current;

      if (!root) {
        return undefined;
      }

      const elements = root.querySelectorAll(selector);

      if (!elements.length) {
        return undefined;
      }

      if (prefersReducedMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0 });
        return undefined;
      }

      gsap.fromTo(
        elements,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: root,
            start,
            once,
          },
        },
      );

      return undefined;
    },
    { scope: rootRef, dependencies: [prefersReducedMotion, selector, start, y, stagger, duration, once] },
  );
};

export default useSectionReveal;
