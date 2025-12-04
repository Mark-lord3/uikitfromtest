import React from "react";

export default function TimelineHeader({ children, badgeText }) {
  return (
    <div className='timeline-block-header'>
      <div className='timeline-block-container'>
        {children}
        <div className='timeline-block-badge'>
          {badgeText ? badgeText : "Exclusive subscriber weekly £1,000 draws"}
        </div>
      </div>
    </div>
  );
}
