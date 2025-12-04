import React from "react";
import HowItWorksCard from "./how-it-works-card/how-it-works-card";
import HowItWorksContainer from "./how-it-works-container/how-it-works-container";
import HowItWorksList from "./how-it-works-list/how-it-works-list";
import HowItWorksTitle from "./how-it-works-title/how-it-works-title";
import HowItWorksSubtitle from "./how-it-works-subtitle/how-it-works-subtitle";
import HowItWorksFooter from "./how-it-works-footer/how-it-works-footer";
import Button from "../common/button/button";
import HowItWorksSlider from "./how-it-works-slider/how-it-works-slider";
import HowItWorksBackground from "./how-it-works-background/how-it-works-background";
import { items } from "./static-data";
import { AWS_S3_URL } from "../../constants";

export default {
  title: "Main/How it works",
  tags: ["autodocs"],
  argTypes: {},
};

const cards = items.map((item) => <HowItWorksCard {...item} />);

export const Default = {
  render: () => (
    <HowItWorksContainer>
      <HowItWorksTitle>How it works</HowItWorksTitle>
      <HowItWorksList>{cards}</HowItWorksList>
      <HowItWorksSlider>{cards}</HowItWorksSlider>
      <HowItWorksSubtitle>Your win. Your dream. Your choice.</HowItWorksSubtitle>
      <HowItWorksFooter>
        <Button>Enter now</Button>
      </HowItWorksFooter>
      <HowItWorksBackground src={AWS_S3_URL + "how-it-works/bg-line.svg"} />
    </HowItWorksContainer>
  ),
};
