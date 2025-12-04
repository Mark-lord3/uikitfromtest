import React from "react";
import ImageZoomWrapper from "../../../common/image-zoom-wrapper/image-zoom-wrapper";

export default function FloorplanTabpanel({ children }) {
  return (
    <div className='hero-block-floorplan'>
      <ImageZoomWrapper>{children}</ImageZoomWrapper>
    </div>
  );
}
