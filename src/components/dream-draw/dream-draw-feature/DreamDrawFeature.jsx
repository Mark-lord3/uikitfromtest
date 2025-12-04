import React from "react";
import "./styles.scss";

export default function DreamDrawFeature(props) {
  const { iconUrl, iconTitle, iconDescription } = props;
  return (
    <div className='dream-draw-feature'>
      <div className='dream-draw-feature__header'>
        <div className='dream-draw-feature__icon'>
          <img src={iconUrl} alt='dream draw icon' />
        </div>
        <div className='dream-draw-feature__title'>{iconTitle}</div>
      </div>
      <p className='dream-draw-feature__text'>{iconDescription}</p>
    </div>
  );
}
