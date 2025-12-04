import React from "react";
import MainSlider from "../../../common/main-slider/main-slider";

export default function GalleryTabpanel({ children }) {
  return (
    <div className='hero-block-gallery'>
      <MainSlider delay={7000} pagination={false} theme='light'>
        {children}
      </MainSlider>
    </div>
  );
}
