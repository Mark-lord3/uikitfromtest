import React from "react";
import DreamDrawBlock from "./dream-draw-block/dream-draw-block";
import DreamDrawContent from "./dream-draw-content/dream-draw-content";
import DreamDrawImg from "./dream-draw-img/dream-draw-img";
import DreamDrawDescription from "./dream-draw-description/dream-draw-description";
import DreamDrawAccordion from "./dream-draw-accordion/dream-draw-accordion";
import CharityContainer from "../charity/charity-container/charity-container";
import CharityContent from "../charity/charity-content/charity-content";
import CharityImg from "../charity/charity-img/charity-img";
import CharityTitle from "../charity/charity-title/charity-title";
import image from "../../images/charity/brain-tumor.png";
import { dreamDrawCards, dreamDrawAccordionData } from "./static-data";
import Button from "../common/button/button";
import { AWS_S3_URL } from "../../constants";

const renderComponent = (charity) => {
  return (
    <DreamDrawBlock>
      <DreamDrawContent
        title='The West Sussex Dream Home'
        text=''
        type2
        features={dreamDrawCards}
        description={[
          "Your new Dream Home is located in the heart of West Sussex, a stone’s throw from the beach, and the perfect home for those long summer nights.",
          "Fully furnished and ready for you to move in, or simply use as your country retreat from those busy days in the city.",
          "And if this isn’t your Dream Home, you can elect to take the tax-free cash alternative instead.",
          "It’s time to dream big and do good; our 21st Dream Home competition is here.",
        ]}
      >
        <DreamDrawImg
          text={"Win this £2.8m Cotswolds Dream home or choose the same value in cash, tax-free."}
          badge={false}
          // linkText='Discover the next Dream Home'
          // linkHref='/cash-option'
        >
          <picture>
            <source
              srcSet={`${AWS_S3_URL}dream-home-draw/01.09.2025/dh-2x.jpg 1.5x, ${AWS_S3_URL}dream-home-draw/01.09.2025/dh.jpg`}
              media='(min-width: 576px)'
            />
            <source
              srcSet={`${AWS_S3_URL}dream-home-draw/01.09.2025/dh-sm-2x.jpg 1.5x, ${AWS_S3_URL}dream-home-draw/01.09.2025/dh-sm.jpg`}
            />
            <img
              src={`${AWS_S3_URL}dream-home-draw/01.09.2025/dh.jpg`}
              width={780}
              height={520}
              alt='dream draw'
            />
          </picture>
        </DreamDrawImg>
        {/* <DreamDrawDescription
          text={[
            "This magnificent family home in Kent, worth £2,700,000 including a whopping £200,000 worth of furnishings, is the very definition of a Dream Home.",
            "With your own pool set within fabulous, extensive grounds, and no Stamp Duty to pay, you'll be living the dream in no time.",
            "Oh, and did we mention that you can also elect to take the tax-free cash alternative? It's time to dream big and do good. Our 15th Dream Home competition is here.",
          ]}
          footer={<Button>Enter now</Button>}
        /> */}
      </DreamDrawContent>
      <DreamDrawAccordion items={dreamDrawAccordionData} />
    </DreamDrawBlock>
  );
};

export default {
  title: "Main/Dream Draw",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => renderComponent(),
};

export const WithCharity = {
  render: () =>
    renderComponent(
      <CharityContainer>
        <CharityTitle>
          Dream big. <br className='mobile-spacer' /> Do good.
        </CharityTitle>
        <CharityContent>
          <CharityImg image={image} />
        </CharityContent>
      </CharityContainer>,
    ),
};
