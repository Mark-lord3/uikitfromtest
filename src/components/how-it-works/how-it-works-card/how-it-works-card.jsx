import React from "react";

export default function HowItWorksCard({ title, description, icon }) {
  return (
    <div className='how-it-works-card'>
      <div className='how-it-works-card__image'>
        <img src={icon} alt='card-icon' />
      </div>
      <h3 className='how-it-works-card__title'>{title}</h3>
      <p className='how-it-works-card__description'>{description}</p>
    </div>
  );
}
