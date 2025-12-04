import React from "react";
import SubtitleText from "../../common/subtitle-text/subtitle-text";

export default function TimelineSubtitle({ children }) {
  return (
    <SubtitleText isCentered color='color-1'>
      {children}
    </SubtitleText>
  );
}
