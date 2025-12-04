import React from "react";
import SectionWrapper from "../common/section-wrapper/section-wrapper";
import CharityContainer from "./charity-container/charity-container";
import CharityTitle from "./charity-title/charity-title";
import CharityContent from "./charity-content/charity-content";
import CharityImg from "./charity-img/charity-img";
import image from "../../images/charity/brain-tumor.png";
import image1 from "../../images/charity/btr_logo.png";
import image2 from "../../images/charity/pipal-tree-logo.png";
import image3 from "../../images/charity/sense.png";
import image4 from "../../images/charity/war_paws.png";
import image5 from "../../images/charity/whenyouwishuponastar.png";
import imageLogo from "../../images/charity/fr-logo.png";
import CharityList from "./charity-list/charity-list";

export default {
  title: "Main/Charity",
  tags: ["autodocs"],
  argTypes: {},
};

export const withSingleImage = {
  render: () => (
    <SectionWrapper bg='bg-1'>
      <CharityContainer>
        <CharityTitle>OUR CHARITY PARTNERS</CharityTitle>
        <CharityContent type='single'>
          <CharityImg
            image1={image}
            link='https://www.fundraisingregulator.org.uk/directory/raffle-house-ltd'
            iconSrc='https://www.fundraisingregulator.org.uk/fr-badge/7c26a59e-dca9-462a-8e9b-84b3c234f6f9/en/colour'
          />
        </CharityContent>
      </CharityContainer>
    </SectionWrapper>
  ),
};

export const withList = {
  render: () => (
    <SectionWrapper bg='bg-1'>
      <CharityContainer>
        <CharityTitle>OUR CHARITY PARTNERS</CharityTitle>
        <p className='sub'>
          Win a home and donate to one of our charity partners or a charity of your choice.
        </p>
        <CharityContent type='list'>
          <CharityList
            items={[
              { src: image1 },
              { src: image2 },
              { src: image3 },
              { src: image4 },
              { src: image5 },
            ]}
          />
        </CharityContent>
      </CharityContainer>
    </SectionWrapper>
  ),
};
