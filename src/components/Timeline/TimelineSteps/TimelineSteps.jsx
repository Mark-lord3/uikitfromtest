import React from "react";
import { useMobileDevice } from "../../../hooks/useMobileDevice";
import VerticalTimeline from "../VerticalTimeline/VerticalTimeline";
import HorizontalTimeline from "../HorizontalTimeline/HorizontalTimeline";

export default function TimelineSteps(props) {
  const { matches: mobile } = useMobileDevice();
  return <HorizontalTimeline steps={props.steps} />;

  // return mobile ? (
  //   <HorizontalTimeline steps={horizontalTimelineSteps} />
  // ) : (
  //   <VerticalTimeline steps={verticalTimelineSteps} widget={widget} />
  // );
}
