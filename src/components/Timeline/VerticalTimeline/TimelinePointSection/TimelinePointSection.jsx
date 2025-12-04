import React from "react";
import TimelinePoint from "../TimelinePoint/TimelinePoint";
import TimelineLeftText from "../TimelineLeftText/TimelineLeftText";
import TimelineRightText from "../TimelineRightText/TimelineRightText";

export default function TimelinePointSection({ leftText, rightText, isActive, icon }) {
  return (
    <div className={`timeline-point-section ${isActive ? "active" : ""}`}>
      <TimelineLeftText text={leftText} isActive={isActive} />
      <TimelinePoint icon={icon} />
      <TimelineRightText text={rightText} isActive={isActive} />
    </div>
  );
}
