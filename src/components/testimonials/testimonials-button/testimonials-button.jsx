import React from "react";

export default function TestimonialsButton({ onClick, children }) {
  return <button className="testimonials-btn" onClick={onClick}>{children}</button>;
}
