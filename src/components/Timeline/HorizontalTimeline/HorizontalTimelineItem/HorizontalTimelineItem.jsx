import React from "react";

export default function HorizontalTimelineItem(props) {
  const step = props.step;

  return (
    <div className='horizontal-timeline-item'>
      <div className='horizontal-timeline-item__info'>{step.title}</div>
      <div className='horizontal-timeline-item__icon'>
        <img src={step.iconUrl} alt='timeline icon' />
      </div>
      <div className='horizontal-timeline-item__point'>
        <span></span>
      </div>
      <div className='horizontal-timeline-item__date'>
        {step.description.map((descr, i) => {
          return <div key={step._id + i}>{descr}</div>;
        })}
      </div>
    </div>
  );
}
