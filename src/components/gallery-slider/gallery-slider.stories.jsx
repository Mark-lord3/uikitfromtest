import React from "react";
import GallerySlider from "./gallery-slider";
import { simpleGalleryData } from "./static-data";

const meta = {
  title: "Main/GallerySlider",
  tags: ["autodocs"],
};

export const Default = {
  render: () => <GallerySlider data={simpleGalleryData} />,
};

export default meta;
