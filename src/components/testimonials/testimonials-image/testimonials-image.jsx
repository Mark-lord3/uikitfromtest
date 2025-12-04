import React from "react";

export default function TestimonialsImage({src, placement}) {
  return <img className={`testimonials-${placement}-image`} src={src} />;
}
