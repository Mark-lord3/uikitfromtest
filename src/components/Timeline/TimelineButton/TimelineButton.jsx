import React from "react";

export default function TimelineButton({ onClick }) {
  return (
    <div className='timeline-block__btn-wrap'>
      <button className='timeline-block__btn' onClick={onClick}>
        Enter Now
      </button>
    </div>
  );
}
