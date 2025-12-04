import React from "react";

export default function TimelinePoint({ icon }) {
  if (icon) {
    return <div className='timeline-point'>{icon}</div>;
  }
  return <div className='timeline-point empty'></div>;
}
