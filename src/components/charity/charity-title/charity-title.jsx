import React from "react";
import { TitleText } from "../../common";

export default function CharityTitle({ children }) {
  return (
    <TitleText isCentered as='h2' variant={"primary"} color='color-5'>
      {children}
    </TitleText>
  );
}
