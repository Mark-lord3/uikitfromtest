import React from "react";
import TitleText from "../../common/title-text/title-text";

export default function HowItWorksTitle({ children }) {
  return (
    <TitleText isCentered as='h2' variant={"primary"} color='color-5'>
      {children}
    </TitleText>
  );
}
