import React from "react";
import DreamDrawItem from "./dream-draw-item/dream-draw-item";
import DreamDrawFeature from "../dream-draw-feature/DreamDrawFeature";

export default function DreamDrawContent({
  title,
  text,
  features,
  charity,
  type2,
  children,
  description,
}) {
  return (
    <div className='dream-draw__content'>
      <div className='dream-draw-cols'>
        {/* <div className='dream-draw__items'> */}
        {/* {Boolean(matchesLg) && (
            <TitleText isCentered as='h1' variant={"primary"} color='color-5'>
              {title}
            </TitleText>
          )} */}
        {charity || null}
        <h1 className={type2 && "dream-draw__title"}>{title ? title : "Win a House"}</h1>
        {text && <p className='dream-draw__text'>{text}</p>}
        {description && (
          <div className='dream-draw-description'>
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
        {type2 ? (
          <div className='dream-draw__features'>
            {features.map((item) => (
              <DreamDrawFeature key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <div className='dream-draw__items-grid'>
            {features.map((item, index) => (
              <DreamDrawItem key={index} {...item} />
            ))}
          </div>
        )}
        {/* </div> */}
        {children}
      </div>
    </div>
  );
}
