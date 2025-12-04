import React from "react";
import MainSlider from "../../../common/main-slider/main-slider";

export default function InfoTabpanel({ children }) {
  return (
    <div className='hero-block-info'>
      <div className='hero-block-info__inner'>
        <MainSlider navigation={true}>{children}</MainSlider>
      </div>
    </div>
  );
}
