import React from "react";
import "../styles.scss";

export default function HowItWorksContainer({ children }) {
  return (
    <div className='how-it-works'>
      <div className='how-it-works__container'>
        {children}        
      </div>
    </div>
  );
}
