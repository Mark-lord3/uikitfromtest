import React from "react";
// import { Link } from 'react-router-dom';

export default function DreamDrawDescription({ text, footer }) {
  return (
    <div className='dream-draw-description'>
      {text.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {Boolean(footer) && (
        <div className='dream-draw-description__footer'>
          <a href='/ticket-selector' className='dream-draw-description__btn'>
            Enter now
          </a>
        </div>
      )}
    </div>
  );
}
