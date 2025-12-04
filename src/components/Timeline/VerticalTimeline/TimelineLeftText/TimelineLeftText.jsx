import React from "react";

export default function TimelineLeftText({ text, isActive }) {
  return (
    <div className={`timeline-text left ${isActive ? "active" : ""}`}>
      <p>{text}</p>
      <svg
        className='side-line'
        xmlns='http://www.w3.org/2000/svg'
        width='81'
        height='3'
        viewBox='0 0 81 3'
        fill='none'
      >
        <path d='M0.503418 1.96582H80.5034' strokeWidth='2' />
      </svg>
    </div>
  );
}
