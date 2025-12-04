import React from "react";

export default function TimelineFooter({ children }) {
  return (
    <div className='timeline-block__footer'>
      <p>{children}</p>
    </div>
  );
}
