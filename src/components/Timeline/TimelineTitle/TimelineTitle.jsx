import React from "react";
import TitleText, { HEADING_LEVELS } from "../../common/title-text/title-text";

export default function TimelineTitle({ children }) {
  return (
    <TitleText isCentered as={HEADING_LEVELS.H2} variant='primary' color='color-1'>
      {children}
    </TitleText>
  );
}
