import React from "react";

export default function FaqFooter({ children }) {
  return (
    <div className='other-container'>
      <div className='question-block'>{children}</div>
    </div>
  );
}
