import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Swiper as SwiperCore } from "swiper";
import "./styles.scss";

SwiperCore.use([Navigation, Pagination]);

export default function MainSlider({ children, theme = "dark", className = "", ...rest }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div className="main-slider">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        speed={700}
        autoplay={{ delay: 2000 }}
        loop
        navigation
        pagination={false}  // ❌ disable swiper dots
        className={`${theme === "dark" ? "swiper-theme-dark" : "swiper-theme-light"} ${className}`}
        onSlideChange={(swiper) => {
          setActiveDot(swiper.realIndex % 3); // ⭐ 3-dot logic
        }}
        {...rest}
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* ⭐ CUSTOM 3 DOTS */}
      <div className="main-slider__dots">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            className={`main-slider__dot ${activeDot === dot ? "active" : ""}`}
            onClick={() => swiperRef?.slideToLoop(dot)}
          />
        ))}
      </div>
    </div>
  );
}
