import React from "react";
import ReactFastMarquee from "react-fast-marquee";

export default function Marquee({ images, isCharitySlider }) {
  return (
    <ReactFastMarquee speed={70} autoFill>
      {images.map((x, i) => {
        return (
          <div
            key={i}
            data-index={i}
            className={isCharitySlider ? "rui-charity-rounded-image" : undefined}
          >
            <img
              alt='partner'
              src={x.src}
              style={{ marginLeft: isCharitySlider ? "0px" : "40px" }}
              className={x.isRounded ? "rounded" : undefined}
            />
          </div>
        );
      })}
    </ReactFastMarquee>
  );
};
