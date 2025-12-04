import React from "react";
import SimpleGallery from "./simple-gallery";
import { simpleGalleryData } from "./static-data";

const meta = {
  title: "Main/SimpleGallery",
  tags: ["autodocs"],
};

export const Default = {
  render: () => <SimpleGallery data={simpleGalleryData} />,
};

export default meta;
