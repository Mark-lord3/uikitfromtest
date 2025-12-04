import React, { useState } from "react";
import { HeroTablist } from "./hero-tablist/hero-tablist";
import TourTabpanel from "./hero-tabpanel/tour-tabpanel/tour-tabpanel";
import GalleryTabpanel from "./hero-tabpanel/gallery-tabpanel/gallery-tabpanel";
import HeroTabpanel from "./hero-tabpanel/hero-tabpanel";
import FloorplanTabpanel from "./hero-tabpanel/floorplan-tabpanel/floorplan-tabpanel";
import "./styles.scss";
import InfoTabpanel from "./hero-tabpanel/info-tabpanel/info-tabpanel";

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

export default function HeroSection() {
  const [activeTabId, setActiveTabId] = useState("tour");
  const handleChangeActiveTab = (id) => setActiveTabId(id);
  return (
    <section className='hero-block'>
      <HeroTablist
        tabs={tabs}
        activeTabId={activeTabId}
        onChangeActiveTab={handleChangeActiveTab}
      />
      <div className='hero-block__tabpanels'>
        <HeroTabpanel id='tour'>
          <TourTabpanel />
        </HeroTabpanel>
        {/* <HeroTabpanel id="gallery" activeTabId={activeTabId}>
          <GalleryTabpanel />
        </HeroTabpanel>
        <HeroTabpanel id="floorplan" activeTabId={activeTabId}>
          <FloorplanTabpanel />
        </HeroTabpanel>
        <HeroTabpanel id="info" activeTabId={activeTabId}>
          <InfoTabpanel />
        </HeroTabpanel> */}
      </div>
    </section>
  );
}
