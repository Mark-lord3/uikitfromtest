import React from "react";

export default function CharityImg({ image1, image2, link, iconSrc }) {
  return (
    <div className='rui-right-image'>
      <img src={image1} alt='charity logo' />
      {image2 && <img src={image2} alt='fundraising regulator' />}
      {link && iconSrc && (
        <a href={link} rel='nofollow' target='_blank' aria-label='fundraising regulator'>
          <img
            src={iconSrc}
            alt='Fundraising Regulator badge with validation link'
            loading='lazy'
          />
        </a>
      )}
    </div>
  );
}
