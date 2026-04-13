const Container = ({ as = "div", className = "", children, ...props }) => {
  const Component = as;
  const classes = ["container-shell", className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Container;
