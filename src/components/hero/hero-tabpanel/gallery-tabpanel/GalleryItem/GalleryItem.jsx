import React from "react";

export default function GalleryItem({ children }) {
  return (
    <div className='gallery-image' role='presentation'>
      {children}
    </div>
  );
}
