import React from "react";
import HeroBlockContainer from "./hero-block-container/hero-block-container";
import HeroBlockHeading from "./hero-block-heading/hero-block-heading";
import HeroBlockVideo from "./hero-block-video/hero-block-video";
import HeroBlockNavigation from "./hero-block-navigation/hero-block-navigation";
import LearnMore from "../common/learn-more/learn-more";
import { AWS_S3_URL } from "../../constants";

export default {
  title: "Main/Hero Block",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => (
    <HeroBlockContainer>
      <HeroBlockVideo
        video={AWS_S3_URL + "videos/competition-video-28-06-2024.mp4"}
        tabletVideo={AWS_S3_URL + "videos/competition-video-28-06-2024.mp4"}
        mobileVideo={AWS_S3_URL + "videos/mobile-competition-video-28-06-2024.mp4"}
        poster={AWS_S3_URL + "videos/preview-competition-video-28-06-2024.jpg"}
        tabletPoster={AWS_S3_URL + "videos/preview-competition-video-28-06-2024.jpg"}
        mobilePoster={AWS_S3_URL + "videos/preview-mobile-competition-video-28-06-2024.jpg"}
      >
        <HeroBlockHeading>Win this £2.7 million Kent Dream Home</HeroBlockHeading>
        <HeroBlockNavigation>
          <LearnMore href='http://example.com' color='secondary' />
        </HeroBlockNavigation>
      </HeroBlockVideo>
    </HeroBlockContainer>
  ),
};
