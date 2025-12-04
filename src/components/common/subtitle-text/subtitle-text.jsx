import React from "react";
import "./styles.scss";

const SubtitleText = ({ color, isCentered, ...props }) => {
  const colorStyle = color ? ` ${color}` : " color-1";
  const variantType = "rui-subtitle-text";
  const className = variantType + colorStyle + (isCentered ? " centered" : "");

  return <p className={className}>{props.children}</p>;
};

export default SubtitleText;
