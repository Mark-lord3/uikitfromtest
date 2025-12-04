import React from "react";
import './styles.scss';

export default function Button({ isLink, href, onClick, children, ...props }) {
  if (isLink) {
    return (
      <a href={href} className='uikit-button' {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className='uikit-button' {...props}>
      {children}
    </button>
  );
}
