import React from "react";
import HeroTab from "../hero-tab/hero-tab";
import { useHeroDispatchContext, useHeroStateContext } from "../hero-container/hero-container";

const tabs = [
  {
    id: "tour",
    title: "Tour",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "floorplan",
    title: "Floorplan",
  },
  {
    id: "info",
    title: "Info",
  },
];

export default function HeroTablist() {
  const activeTabId = useHeroStateContext();
  const setActiveTabId = useHeroDispatchContext();
  return (
    <div className='hero-block__tablist' role='tablist'>
      {tabs.map((tab) => (
        <HeroTab
          key={tab.id}
          id={tab.id}
          title={tab.title}
          selected={tab.id === activeTabId}
          onSelect={setActiveTabId}
          dark={activeTabId === "floorplan"}
        />
      ))}
    </div>
  );
}
