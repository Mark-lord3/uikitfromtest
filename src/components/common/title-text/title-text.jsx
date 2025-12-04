import React from "react";
import "./styles.scss";

export const HEADING_LEVELS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
};

const TitleText = ({ as, color, variant, isCentered, ...props }) => {
  const colorStyle = color ? ` ${color}` : " color-1";
  const variantType = variant ? `rui-${variant}-title` : "rui-primary-title";
  const className = variantType + colorStyle + (isCentered ? " centered" : "");
  function parseVariants(as) {
    switch (as) {
      case HEADING_LEVELS.H1: {
        return <h1 className={className}>{props.children}</h1>;
      }
      case HEADING_LEVELS.H2: {
        return <h2 className={className}>{props.children}</h2>;
      }
      case HEADING_LEVELS.H3: {
        return <h3 className={className}>{props.children}</h3>;
      }
      case HEADING_LEVELS.H4: {
        return <h4 className={className}>{props.children}</h4>;
      }
      case HEADING_LEVELS.H5: {
        return <h5 className={className}>{props.children}</h5>;
      }
      case HEADING_LEVELS.H6: {
        return <h6 className={className}>{props.children}</h6>;
      }
      default: {
        return <h1 className={className}>{props.children}</h1>;
      }
    }
  }
  return parseVariants(as);
};

export default TitleText;
