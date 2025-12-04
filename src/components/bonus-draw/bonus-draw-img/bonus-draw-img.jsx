import React from "react";

export default function BonusDrawImg({src, srcSet, sizes, alt}) {
  return (
    <img
      srcSet={srcSet}
      sizes={sizes}
      src={src}
      alt={alt}
      className="bonus-draw__img"
    />
  );
}
