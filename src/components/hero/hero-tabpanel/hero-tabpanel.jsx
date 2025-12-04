import React from "react";
import { Fade } from "@material-ui/core";
import { useHeroStateContext } from "../hero-container/hero-container";

export default function HeroTabpanel({ id, children }) {
  const activeTabId = useHeroStateContext();
  return (
    <Fade in={activeTabId === id}>
      <div
        className='hero-block__tabpanel'
        role='tabpanel'
        tabIndex='0'
        aria-labelledby={`${id}-tab`}
      >
        {children}
      </div>
    </Fade>
  );
}
