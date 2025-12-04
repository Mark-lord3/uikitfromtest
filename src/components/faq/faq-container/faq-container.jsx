import React from "react";
import "../styles.scss";

export default function FaqContainer({ children }) {
  return (
    <div className='faq-block'>
      <div className='faq-container'>
        <div className='faq-wrapper'>{children}</div>
      </div>
    </div>
  );
}
