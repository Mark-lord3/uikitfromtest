import React from "react";
import { TitleText } from "../../../common/title-text";

export default function FaqInfoTitle({ children }) {
  return (
    <TitleText isCentered as='h2' variant={"primary"} color='color-1'>
      {children}
    </TitleText>
  );
}
