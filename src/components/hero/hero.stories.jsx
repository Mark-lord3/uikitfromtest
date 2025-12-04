import React from "react";
import HeroContainer from "./hero-container/hero-container";
import HeroTabpanels from "./hero-tabpanels/hero-tabpanels";
import HeroTabpanel from "./hero-tabpanel/hero-tabpanel";
import TourTabpanel from "./hero-tabpanel/tour-tabpanel/tour-tabpanel";
import VideoBlockHeading from "../common/video-block/video-block-heading/video-block-heading";
import SubTitleText from "../common/subtitle-text/subtitle-text";
import GalleryTabpanel from "./hero-tabpanel/gallery-tabpanel/gallery-tabpanel";
import GalleryItem from "./hero-tabpanel/gallery-tabpanel/GalleryItem/GalleryItem";
import FloorplanTabpanel from "./hero-tabpanel/floorplan-tabpanel/floorplan-tabpanel";
import InfoTabpanel from "./hero-tabpanel/info-tabpanel/info-tabpanel";
import HeroTablist from "./hero-tablist/hero-tablist";
import { AWS_S3_URL } from "../../constants";
import { imageNames, infoTabpanelData } from "./static-data";
import floorplanDesctop from "../../images/hero/floorplan_desctop.png";
import floorplanMobile from "../../images/hero/floorplan_mobile.png";
import HeroInfoItem from "./hero-tabpanel/info-tabpanel/hero-info-item/hero-info-item";
import TrustpilotQuote from "./trustpilot-quote/TrustpilotQuote";

const withUrl = (imageName) => `${AWS_S3_URL}gallery/home/${imageName}.jpg`;

export default {
  title: "Main/Hero",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => (
    <HeroContainer>
      <>
        <HeroTablist />
        <HeroTabpanels>
          <HeroTabpanel id='tour'>
            <TourTabpanel
              video={AWS_S3_URL + "videos/competition-video-28-06-2024.mp4"}
              tabletVideo={AWS_S3_URL + "videos/competition-video-28-06-2024.mp4"}
              mobileVideo={AWS_S3_URL + "videos/mobile-competition-video-28-06-2024.mp4"}
              poster={AWS_S3_URL + "videos/preview-competition-video-28-06-2024.jpg"}
              tabletPoster={AWS_S3_URL + "videos/preview-competition-video-28-06-2024.jpg"}
              mobilePoster={AWS_S3_URL + "videos/preview-mobile-competition-video-28-06-2024.jpg"}
            >
              <VideoBlockHeading>
                <SubTitleText isCentered variant={"primary"} color='color-1'>
                  Win this £2.7 million Kent Dream Home
                </SubTitleText>
                <TrustpilotQuote
                  author='John Paul'
                  text='Raffle House offer a genuine chance to win big while
                            supporting worthy charities. I particularly appreciate the independent selection process
                            which provides greater confidence of random selections.
                        '
                />
              </VideoBlockHeading>
            </TourTabpanel>
          </HeroTabpanel>
          <HeroTabpanel id='gallery'>
            <GalleryTabpanel>
              {imageNames.map((imageName, i) => (
                <GalleryItem key={i}>
                  <img
                    srcSet={`
                      ${withUrl(`${imageName}_800x600`)} 800w,
                      ${withUrl(`${imageName}_1600x900`)} 1600w,
                      ${withUrl(`${imageName}_3840x2160`)} 3840w,
                    `}
                    sizes={`(max-width: 800px) 800px, (max-width: 1600px) 1600px, 3840px`}
                    src={`${withUrl(`${imageName}_1600x900`)}`}
                    alt='property'
                  />
                </GalleryItem>
              ))}
            </GalleryTabpanel>
          </HeroTabpanel>
          <HeroTabpanel id='floorplan'>
            <FloorplanTabpanel>
              <img
                className='hero-block-floorplan__img'
                srcSet={`${floorplanMobile} 1024w, ${floorplanDesctop} 1910w`}
                sizes='(min-width: 768px) 1910px, 100vw'
                width={1910}
                height={720}
                alt='floorplan'
              />
            </FloorplanTabpanel>
          </HeroTabpanel>
          <HeroTabpanel id='info'>
            <InfoTabpanel>
              {infoTabpanelData.map((info, index) => {
                return (
                  <HeroInfoItem
                    title={info.title}
                    description={info.description}
                    key={info._id}
                    index={index}
                  />
                );
              })}
            </InfoTabpanel>
          </HeroTabpanel>
        </HeroTabpanels>
      </>
    </HeroContainer>
  ),
};
