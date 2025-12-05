import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Swiper as SwiperCore } from "swiper";
import "./styles.scss";

SwiperCore.use([Navigation, Pagination]);

export default function MainSlider({ children, theme = "dark", className = "", ...rest }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const dots = [0, 1, 2];
  const [activeSlide, setActiveSlide] = useState(0);
  const [step, setStep] = useState(0);

  const activeDotIndex = step % dots.length;

  function goToDot(dotIndex) {
    if (!swiperRef) return;

    const diff = dotIndex - activeDotIndex;
    const total = children.length;

    const target = activeSlide + diff;

    // wrap into real Swiper index
    const realSlide = ((target % total) + total) % total;

    swiperRef.slideToLoop(realSlide);
  }

  return (
    <div className="main-slider">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        speed={700}
        autoplay={{ delay: 2500 }}
        loop
        navigation
        pagination={false}
        className={`${theme === "dark" ? "swiper-theme-dark" : "swiper-theme-light"} ${className}`}
        
        onSlideChange={(swiper) => {
          const total = children.length;
          const index = swiper.realIndex;

          let direction = 0;

          if (index === activeSlide) direction = 0;
          else if (index === 0 && activeSlide === total - 1) direction = 1;
          else if (index === total - 1 && activeSlide === 0) direction = -1;
          else if (index > activeSlide) direction = 1;
          else direction = -1;

          setActiveSlide(index);
          setStep((prev) => prev + direction);
        }}

        {...rest}
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM DOTS */}
      <div className="testimonials__dots">
        {dots.map((dot, i) => (
          <button
            key={i}
            className={
              "testimonials__dot" +
              (activeDotIndex === dot ? " testimonials__dot--active" : "")
            }
            onClick={() => goToDot(dot)}
          />
        ))}
      </div>
    </div>
  );
}
