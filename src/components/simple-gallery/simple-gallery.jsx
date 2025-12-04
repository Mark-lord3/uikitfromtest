import React from "react";
import TitleText from "../common/title-text/title-text";
import MainSlider from "../common/main-slider/main-slider";
import "./styles.scss";

const withUrl = (imageName) => `${imageName}.jpg`;

export default function SimpleGallery({ data }) {
  const slides = data.map(({ title, text, imageName }, i) => (
    <div className='gallery-images' role='presentation' key={i}>
      <div className='gallery-image'>
        <img
          srcSet={`
            ${withUrl(`${imageName}_800x600`)} 800w,
            ${withUrl(`${imageName}_1600x900`)} 1600w,
            ${withUrl(`${imageName}_3840x2160`)} 3840w,
          `}
          sizes={`(max-width: 800px) 800px, (max-width: 1600px) 1600px, 3840px`}
          src={`${withUrl(`${imageName}_1600x900`)}`}
          alt='property'
        />
      </div>
      <div className='simple-gallery__info'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  ));
  return (
    <div className='simple-gallery'>
      <TitleText isCentered as='h2' variant={"primary"} color='color-5'>
        Gallery
      </TitleText>
      <MainSlider theme='light'>{slides}</MainSlider>
    </div>
  );
}
