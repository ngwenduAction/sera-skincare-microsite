const SectionEyebrow = ({ children, className = "" }) => {
  const classes = ["section-eyebrow", className].filter(Boolean).join(" ");

  return <p className={classes}>{children}</p>;
};

export default SectionEyebrow;
