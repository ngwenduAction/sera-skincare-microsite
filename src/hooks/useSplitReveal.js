import { gsap, SplitText } from "../utils/gsap.js";
import useGsapContext from "./useGsapContext.js";
import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

const getSplitTargets = (split, type) => {
  if (type.includes("chars")) {
    return split.chars;
  }

  if (type.includes("words")) {
    return split.words;
  }

  return split.lines;
};

const useSplitReveal = (
  rootRef,
  {
    selector = "[data-split]",
    start = "top 82%",
    yPercent = 110,
    stagger = 0.05,
    duration = 1.1,
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

      const elements = Array.from(root.querySelectorAll(selector));

      if (!elements.length) {
        return undefined;
      }

      if (prefersReducedMotion) {
        gsap.set(elements, { autoAlpha: 1, clearProps: "all" });
        return undefined;
      }

      const splits = elements.map((element) => {
        const type = element.dataset.splitType || "lines";
        const split = SplitText.create(element, { type });
        const targets = getSplitTargets(split, type);

        gsap.from(targets, {
          yPercent,
          autoAlpha: 0,
          duration,
          ease: "expo.out",
          stagger,
          scrollTrigger: {
            trigger: element,
            start,
            once,
          },
        });

        return split;
      });

      return () => {
        splits.forEach((split) => split.revert());
      };
    },
    { scope: rootRef, dependencies: [prefersReducedMotion, selector, start, yPercent, stagger, duration, once] },
  );
};

export default useSplitReveal;
