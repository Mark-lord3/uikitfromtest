import React from "react";
import TitleText from "../../common/title-text/title-text";
import "../styles.scss";

export default function HeroBlockHeading({ children }) {
  return (
    <div className='video-block-heading'>
      <TitleText isCentered as='h1' variant={"primary"} color='color-1'>
        {children}
      </TitleText>
    </div>
  );
}
