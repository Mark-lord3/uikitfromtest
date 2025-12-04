import React from "react";

export default function FaqInfoLearnMore({ onClick, children }) {
  return (
    <button className='how-it-works-button' onClick={onClick}>
      {children}
      <svg
        width='28'
        height='23'
        viewBox='0 0 28 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.5159 1.13867L25.8088 10.4316C26.1993 10.8221 26.1993 11.4553 25.8088 11.8458L16.5159 21.1387'
          stroke='#DEE965'
          stroke-width='2'
          stroke-linecap='round'
        />
        <path
          d='M1.51233 11.1387L26.5158 11.1387'
          stroke='#DEE965'
          stroke-width='2'
          stroke-linecap='round'
        />
      </svg>
    </button>
  );
}
