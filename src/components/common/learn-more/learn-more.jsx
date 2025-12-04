import React from "react";
import "./styles.scss";

export default function LearnMore({ href, color = "primary" }) {
  const styles = {
    ...(color && { 
      color: color === 'primary' ? '#043b3b' : '',
      color: color === 'secondary' ? '#dee965' : '',
    }),
  };
  return (
    <a className='uikit-learn-more' href={href} style={styles}>
      Learn more{" "}
      <svg
        width='29'
        height='23'
        viewBox='0 0 29 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1 11.5L26.0035 11.5' strokeWidth='2' strokeLinecap='round' />
        <path
          d='M18.0039 1.5L27.2968 10.7929C27.6873 11.1834 27.6873 11.8166 27.2968 12.2071L18.0039 21.5'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </a>
  );
}
