import React from "react";
import PartnersContainer from "./partners-container/partners-container";
import PartnersSlider from "./partners-slider/partners-slider";
import PartnersTitle from "./partners-title/partners-title";
import SectionWrapper from "../common/section-wrapper/section-wrapper";
import { images } from "./static-data";

export default {
  title: "Main/Partners",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => (
    <SectionWrapper bg='bg-3'>
      <PartnersContainer>
        <PartnersTitle>In the news</PartnersTitle>
        <PartnersSlider images={images} />
      </PartnersContainer>
    </SectionWrapper>
  ),
};
