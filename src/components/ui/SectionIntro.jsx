import RevealText from "../motion/RevealText.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = "left",
}) => {
  const alignmentClass = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={["flex max-w-3xl flex-col gap-6", alignmentClass].join(" ")}>
      {eyebrow ? (
        <div data-reveal>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>
      ) : null}

      <RevealText as="h2" className="section-subtitle" splitType="lines">
        {title}
      </RevealText>

      {description ? (
        <p className="section-copy lede-copy" data-reveal>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionIntro;
