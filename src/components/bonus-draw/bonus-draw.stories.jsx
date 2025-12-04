import React from "react";
import BonusDrawContainer from "./bonus-draw-container/bonus-draw-container";
import BonusDrawHeader from "./bonus-draw-header/bonus-draw-header";
import BonusDrawContent from "./bonus-draw-content/bonus-draw-content";
import BonusDrawInfo from "./bonus-draw-info/bonus-draw-info";
import TitleText from "../common/title-text/title-text";
import SubtitleText from "../common/subtitle-text/subtitle-text";
import LearnMore from "../common/learn-more/learn-more";
import Button from "../common/button/button";
import BonusDrawMedia from "./bonus-draw-media/bonus-draw-media";
import BonusDrawImg from "./bonus-draw-img/bonus-draw-img";
import BonusDrawBadge from "./bonus-draw-badge/bonus-draw-badge";
import { AWS_S3_URL } from "../../constants";
import SectionWrapper from "../common/section-wrapper/section-wrapper";

export default {
  title: "Main/Bonus Draw",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => (
    <SectionWrapper bg='bg-2'>
      <BonusDrawContainer>
        <BonusDrawHeader>
          <TitleText isCentered as='h2' variant={"primary"} color='color-1'>
            The BMW Bonus Draw
          </TitleText>
          <SubtitleText color='color-1' isCentered>
            Buy a ticket to win the Kent Dream Home before midnight July 31 & also be entered to win
            the BMW Bonus Draw.
          </SubtitleText>
        </BonusDrawHeader>
        <BonusDrawContent>
          <BonusDrawInfo>
            <TitleText isCentered as='h3' variant={"primary"} color='color-2'>
              Win this BMW 520i worth £55,000
            </TitleText>
            <LearnMore href='http://example.com' />
            <Button>Enter now</Button>
          </BonusDrawInfo>
          <BonusDrawMedia>
            <BonusDrawImg
              srcSet={`
              ${AWS_S3_URL + "bonus-draw/gallery/features_800x600.jpg"} 800w,
              ${AWS_S3_URL + "bonus-draw/gallery/features_1600x900.jpg"} 1600w,
              ${AWS_S3_URL + "bonus-draw/gallery/features_2048x1536.jpg"} 2048w,
              ${AWS_S3_URL + "bonus-draw/gallery/features_3840x2160.jpg"} 3840w,
            `}
              sizes={`(max-width: 800px) 800px, (max-width: 1600px) 1600px, (max-width: 2048px) 2048px, 3840px`}
              src={AWS_S3_URL + "bonus-draw/gallery/features_1600x900.jpg"}
              alt='property'
            />
            <BonusDrawBadge price={"£65k"} />
          </BonusDrawMedia>
        </BonusDrawContent>
      </BonusDrawContainer>
    </SectionWrapper>
  ),
};
