import heroFilm from "../assets/videos/hero/sera-liquid-loop.mp4";
import heroPoster from "../assets/images/optimized/panthenol-droplets-1600.webp";

export const hero = {
  eyebrow: "Clinical-Soft Launch",
  title: "Bring overstimulated skin back to quiet.",
  supportingLine: "Barrier-first care with an editorial finish.",
  description:
    "S\u00c9RA pairs comfort-led textures with barrier-support actives so skin that feels flushed, tight, and reactive can return to a softer, steadier rhythm.",
  primaryCta: {
    label: "Start The Ritual",
    href: "#routine",
  },
  secondaryCta: {
    label: "Read The Story",
    href: "#ingredients",
  },
  trustPoints: [
    "Ceramides, ectoin, panthenol",
    "Fragrance-free, comfort-first textures",
    "Designed for city-worn, reactive skin",
  ],
  featuredProduct: {
    name: "Recovery Concentrate",
    label: "Hero Formula",
    summary:
      "A silk-weight serum concentrate that cushions stressed skin, softens the look of redness, and supports a more resilient barrier over time.",
  },
  media: {
    videoSrc: heroFilm,
    videoType: "video/mp4",
    posterSrc: heroPoster,
    alt: "Soft liquid highlights drifting across a pale clinical surface.",
    width: 1920,
    height: 1080,
    sizes: "(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 92vw",
    objectPosition: "center center",
    videoPreload: "auto",
  },
};
