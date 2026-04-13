import formulaVideo from "../assets/videos/optimized/squalane-oil-texture6-optimized.mp4";
import formulaPoster from "../assets/images/ingredients/squalane-oil-texture8.jpg";

export const formula = {
  eyebrow: "Formula Reveal",
  title: "A texture-led signature moment, designed to feel restrained rather than theatrical.",
  description:
    "The formula sequence should feel like the campaign's visual exhale: a close study of slip, absorption, and skin settling back into composure.",
  badge: "slow motion",
  label: "Signature Study",
  media: {
    videoSrc: formulaVideo,
    videoType: "video/mp4",
    posterSrc: formulaPoster,
    alt: "Macro view of translucent serum bubbles suspended over a pale lilac surface.",
    width: 1080,
    height: 1440,
    sizes: "(min-width: 1280px) 28rem, (min-width: 768px) 42vw, 86vw",
    objectPosition: "center center",
    videoPreload: "none",
  },
  notes: [
    {
      label: "Texture",
      value: "silk-cream slip",
    },
    {
      label: "Finish",
      value: "quiet luminosity",
    },
    {
      label: "Effect",
      value: "less visible agitation",
    },
  ],
  cues: ["Cushion", "Recovery", "Luminosity"],
};
