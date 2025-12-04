import React from "react";

export default function HeroBlockNavigation({ children }) {
  return (
    <div className='video-block-buttons'>
      <div className='video-block-buttons__row'>{children}</div>
    </div>
  );
}
