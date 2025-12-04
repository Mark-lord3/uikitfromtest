import React from "react";

export default function FaqInfoChat({ images, title }) {
  return (
    <div className='chat-details-block'>
      <div className='images-stack'>
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
      <div className='green-point'></div>
      <p>{title}</p>
    </div>
  );
}
