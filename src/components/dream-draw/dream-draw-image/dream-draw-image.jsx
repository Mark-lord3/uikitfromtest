import React from "react";

const withUrl = (imageName) => `${process.env.AWS_S3_URL}bonus-draw/${imageName}.jpg`;

export default function DreamDrawImage() {
  return (
    <div className='dream-draw__media'>
      <img
        className='dream-draw__img'
        srcSet={`
            ${withUrl(`key-highlights_800x600`)} 800w,
            ${withUrl(`key-highlights_1600x900`)} 1600w,
            ${withUrl(`key-highlights_3840x2160`)} 3840w,
          `}
        sizes={`(max-width: 800px) 800px, (max-width: 1600px) 1600px, 3840px`}
        src={`${withUrl(`key-highlights_1600x900`)}`}
        alt='key highlights'
      />
    </div>
  );
}
