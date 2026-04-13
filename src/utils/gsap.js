import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

let pluginsRegistered = false;

export const ensureGsapSetup = () => {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
    pluginsRegistered = true;
  }

  return gsap;
};

ensureGsapSetup();

export { gsap, ScrollTrigger, SplitText, useGSAP };
