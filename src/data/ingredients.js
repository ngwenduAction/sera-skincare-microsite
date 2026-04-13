import ceramidesTexture from "../assets/images/ingredients/ceramides-texture.jpg";
import niacinamideLab from "../assets/images/ingredients/niacinamide-lab-glass.jpg";
import panthenolDroplets from "../assets/images/optimized/panthenol-droplets-1600.webp";
import squalaneTexture from "../assets/images/optimized/squalane-oil-texture-1800.webp";

export const ingredients = [
  {
    id: "ceramide-complex",
    name: "Ceramide Complex",
    benefit: "Supports a stronger moisture barrier",
    profile: "Lipid support",
    description:
      "A lipid-rich blend that helps reduce water loss and reinforces skin that feels tight, flaky, or overstimulated.",
    sensory: "Comforts skin with a fuller, more cushioned feel.",
    evidenceNote: "Used as the foundation of the recovery system.",
    media: {
      src: ceramidesTexture,
      alt: "Soft cream textures layered across an ivory background.",
      width: 750,
      height: 620,
      sizes: "(min-width: 1280px) 30vw, (min-width: 768px) 42vw, 92vw",
      objectPosition: "center center",
    },
  },
  {
    id: "niacinamide",
    name: "Niacinamide",
    benefit: "Helps tone look steadier and less visibly reactive",
    profile: "Visible balance",
    description:
      "Included to help refine the look of uneven tone while supporting a calmer, more composed complexion over time.",
    sensory: "Brings a clearer, steadier look without pushing skin into overcorrection.",
    evidenceNote: "Chosen for its ability to support barrier-minded clarity.",
    media: {
      src: niacinamideLab,
      alt: "Gloved hands measuring ingredients into glass lab vessels.",
      width: 1200,
      height: 800,
      sizes: "(min-width: 1280px) 24vw, (min-width: 768px) 40vw, 92vw",
      objectPosition: "center center",
    },
  },
  {
    id: "panthenol",
    name: "Panthenol",
    benefit: "Softens roughness and eases visible redness",
    profile: "Soothing hydration",
    description:
      "A soothing humectant that cushions compromised skin and leaves the surface looking smoother, fresher, and less reactive.",
    sensory: "Adds an immediate impression of softness without weight.",
    evidenceNote: "Balances performance with immediate comfort.",
    media: {
      src: panthenolDroplets,
      alt: "Clear hydration droplets suspended in a cool reflective liquid.",
      width: 1600,
      height: 914,
      sizes: "(min-width: 1280px) 24vw, (min-width: 768px) 40vw, 92vw",
      objectPosition: "center center",
    },
  },
  {
    id: "squalane",
    name: "Squalane",
    benefit: "Seals in comfort with a weightless, elastic finish",
    profile: "Slip and seal",
    description:
      "A skin-compatible emollient selected for glide, softness, and the kind of breathable finish that keeps comfort in without heaviness.",
    sensory: "Leaves skin with a supple sheen that feels polished, never oily.",
    evidenceNote: "Shapes the silky after-feel of the ritual.",
    media: {
      src: squalaneTexture,
      alt: "Golden oil textures arranged in translucent circular pools.",
      width: 1800,
      height: 1400,
      sizes: "(min-width: 1280px) 30vw, (min-width: 768px) 42vw, 92vw",
      objectPosition: "center center",
    },
  },
];
