import { forwardRef } from "react";

const RevealText = forwardRef(
  ({ as = "div", className = "", splitType = "lines", children, ...props }, ref) => {
    const Component = as;
    const classes = [className].filter(Boolean).join(" ");

    return (
      <Component
        ref={ref}
        className={classes}
        data-split
        data-split-type={splitType}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

RevealText.displayName = "RevealText";

export default RevealText;
