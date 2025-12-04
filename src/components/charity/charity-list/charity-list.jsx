import React from "react";
import { Marquee } from "../../common";

export default function CharityList({ items }) {
  return (
    <div className='rui-right-list'>
      <Marquee images={items} isCharitySlider />
    </div>
  );
}
