import React from "react";
import MainSlider from "../../common/main-slider/main-slider";

export default function HowItWorksSlider({ children }) {
  return (
    <div className='how-it-works__slider'>
      <MainSlider navigation={false}>{children}</MainSlider>
    </div>
  );
}
