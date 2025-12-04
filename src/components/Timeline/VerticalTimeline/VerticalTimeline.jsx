import React from "react";
import RotationStickyItem from "./RotationStickyItem/RotationStickyItem";
import TimelinePointSection from "./TimelinePointSection/TimelinePointSection";
import "./styles.scss";

export default function VerticalTimeline({ steps, widget }) {
  return (
    <div className='vertical-timeline'>
      <RotationStickyItem widget={widget} />
      <div className='svg-timeline'>
        <svg
          width='8px'
          height='98%'
          // viewBox="0 0 8 1426.7"
        >
          <line
            id='timeline'
            fill='none'
            stroke='#FFF'
            strokeWidth='2'
            strokeMiterlimit='10'
            x1='4'
            y1='0'
            x2='4'
            y2='98%'
          />
          <line
            id='timeline-progress'
            fill='none'
            stroke='#dee965'
            strokeWidth='2'
            strokeMiterlimit='10'
            x1='4'
            y1='0'
            x2='4'
            y2='0%'
          />
        </svg>
      </div>
      <div className='timeline-points'>
        {steps &&
          steps.map((step, index) => {
            if (index === 0 && step.isActive) {
              return (
                <TimelinePointSection
                  key={index}
                  leftText={step.leftText}
                  rightText={step.rightText}
                  icon={step.icon}
                  isActive={step.isActive}
                />
              );
            }
            return (
              <TimelinePointSection
                key={index}
                leftText={step.leftText}
                rightText={step.rightText}
                icon={step.icon}
                isActive={step.isActive}
              />
            );
          })}
      </div>
    </div>
  );
}
