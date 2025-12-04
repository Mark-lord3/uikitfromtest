import React from "react";
import "./styles.scss";

export default function SectionWrapper(props) {
  let classNames = props.bg ? `section-wrapper` + ` ${props.bg}` : `section-wrapper`;
  classNames += ` ${props.className || ""}`;
  let extraClassNames = props.extraMarginBottomForFooter ? " extra-mb-50" : "";
  let mobileClassNames = props.mobileBg ? ` ${props.mobileBg}` : "";
  let fullClassNames = classNames + extraClassNames + mobileClassNames;
  return <section className={fullClassNames}>{props.children}</section>;
}
