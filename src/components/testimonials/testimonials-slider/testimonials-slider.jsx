import React from "react";
import MainSlider from "../../common/main-slider/main-slider";

export default function TestimonialsSlider({ slides }) {
  return (
    <MainSlider
      slidesPerView={1}
      spaceBetween={28}
      navigation={false}
      className='testimonials-slider'
      breakpoints={{
        960: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 3,
        },
      }}
    >
      {slides}
    </MainSlider>
  );
}
