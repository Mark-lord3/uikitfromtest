import React from "react";
import Marquee from "../../common/marquee/marquee";

export default function PartnersSlider({ images, isCharitySlider }) {
  return <Marquee images={images} isCharitySlider={isCharitySlider} />;
}
