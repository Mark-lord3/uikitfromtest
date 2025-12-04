import React from "react";
import Slider from "react-slick";

const images = [
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-1.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-2.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-3.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-4.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-5.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-6.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-7.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-8.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-9.jpg`,
  `${process.env.AWS_S3_URL}dream-home-draw/dream-home-draw-10.jpg`,
];

const settings = {
  dots: false,
  arrows: true,
  dotsClass: `slick-dots variant-2`,
  infinite: true,
  autoPlay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 1000,
  speed: 700,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplaySpeed: 10000,
        speed: 700,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        autoplaySpeed: 10000,
        speed: 700,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: false,
      },
    },
  ],
};

export default function DreamDrawSlider() {
  return (
    <div className='dream-draw-slider'>
      <section className='how-it-works-cards-mobile'>
        <div className='container'>
          <div className='how-it-works-cards-mobile-wrapper'>
            <div className='slickContainer'>
              <div className='sliderSlick'>
                <Slider {...settings}>
                  {images.map((image, index) => {
                    return <img src={image} key={index} alt='' />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className='dream-draw-slider__content'>
          <h3>How will you style your Dream Home?</h3>
          {/* <DreamDrawEnterNow /> */}
        </div>
      </section>
    </div>
  );
}
