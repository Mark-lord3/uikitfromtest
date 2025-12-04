import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Swiper as SwiperCore } from "swiper";
import "./styles.scss";

SwiperCore.use([Navigation, Pagination]);

export default function MainSlider({ children, theme = "dark", className = "", ...rest }) {
  return (
    <div className='main-slider'>
      <Swiper
        slidesPerView={1}
        speed={700}
        autoPlay={{
          delay: 2000,
        }}
        loop
        navigation
        pagination={{ clickable: true }}
        className={`${theme === "dark" ? "swiper-theme-dark" : "swiper-theme-light"} ${className}`}
        {...rest}
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
