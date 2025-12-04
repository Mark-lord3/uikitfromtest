import React from "react";
import MainSlider from "../../common/main-slider/main-slider";

export default function FaqSlider({images}) {
  return (
    <div className='left-side-image left-side-slider'>
      <MainSlider pagination={false} theme="light">
        {images.map((image, index) => {
          return <img src={image} key={index} alt='' />;
        })}
      </MainSlider>
    </div>
  );
}
