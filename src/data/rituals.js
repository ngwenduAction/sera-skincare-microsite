import morningRitualImage from "../assets/images/optimized/morning-ritual3.webp";
import eveningRitualImage from "../assets/images/optimized/evening-ritual4.webp";

export const rituals = [
  {
    id: "morning-reset",
    label: "Morning Reset",
    eyebrow: "Daily Ritual",
    cadence: "3-minute sequence",
    result: "Prepared, cushioned, breathable skin",
    title: "Prepare skin for the city without stripping its calm.",
    description:
      "A short AM sequence that keeps the barrier cushioned, the finish breathable, and the complexion quietly luminous.",
    media: {
      src: morningRitualImage,
      alt: "Close-up of cream being applied softly across the cheek with a flat brush.",
      width: 612,
      height: 1079,
      sizes: "(min-width: 1280px) 20rem, (min-width: 768px) 34vw, 92vw",
      objectPosition: "center center",
      caption: "Application stays tactile, never rushed.",
    },
    steps: [
      {
        id: "cleanse",
        order: "01",
        name: "Cream Cleanser",
        detail: "Lifts overnight residue while preserving softness.",
      },
      {
        id: "mist",
        order: "02",
        name: "Recovery Essence",
        detail: "Floods skin with hydration and reduces that first-morning tightness.",
      },
      {
        id: "protect",
        order: "03",
        name: "Barrier Veil SPF",
        detail: "Locks in comfort with a satiny, non-greasy finish.",
      },
    ],
  },
  {
    id: "evening-repair",
    label: "Evening Repair",
    eyebrow: "Recovery Ritual",
    cadence: "Nightly reset",
    result: "Quieter skin by morning",
    title: "Replenish what the day depleted.",
    description:
      "A slower PM sequence built for over-exfoliated, over-heated, and visibly fatigued skin that needs a soft reset.",
    media: {
      src: eveningRitualImage,
      alt: "Portrait of skin at rest with hands gently framing the face after application.",
      width: 612,
      height: 1076,
      sizes: "(min-width: 1280px) 20rem, (min-width: 768px) 34vw, 92vw",
      objectPosition: "center center",
      caption: "The finish should look settled, hydrated, and unforced.",
    },
    steps: [
      {
        id: "melt",
        order: "01",
        name: "Lipid Cleanse Balm",
        detail: "Melts sunscreen and makeup without that squeaky after-feel.",
      },
      {
        id: "treat",
        order: "02",
        name: "Barrier Repair Concentrate",
        detail: "Delivers ceramides, ectoin, and panthenol in a cushion-serum texture.",
      },
      {
        id: "seal",
        order: "03",
        name: "Overnight Comfort Cream",
        detail: "Seals in moisture so skin wakes up quiet, supple, and restored.",
      },
    ],
  },
];
