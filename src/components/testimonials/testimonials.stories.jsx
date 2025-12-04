import React from "react";
import dayjs from "dayjs";
import TestimonialsButton from "./testimonials-button/testimonials-button";
import TestimonialsContainer from "./testimonials-container/testimonials-container";
import TestimonialsContent from "./testimonials-content/testimonials-content";
import TestimonialsDescription from "./testimonials-description/testimonials-description";
import TestimonialsHeading from "./testimonials-heading/testimonials-heading";
import TestimonialsSlider from "./testimonials-slider/testimonials-slider";
import TestimonialsImage from "./testimonials-image/testimonials-image";
import WinnerCard from "../common/winner-card/winner-card";
import { winners } from "./static-data";
import { AWS_S3_URL } from "../../constants";

const topRightImageSrc = `${AWS_S3_URL}testimonials/testimonial-image-1.png`;
const bottomLeftImageSrc = `${AWS_S3_URL}testimonials/testimonial-image-2.png`;

export default {
  title: "Main/Testimonials",
  tags: ["autodocs"],
  argTypes: {},
};

const slides = winners.reduce((slides, winner, index) => {
  if (winner.photoUrl) {
    const slide = (
      <div className='testimonials-winner-card' key={index}>
        <WinnerCard
          name={winner.name}
          description={winner.description || ""}
          drawDate={dayjs(winner.drawDate).format("DD MMM YYYY")}
          photoUrl={AWS_S3_URL + "winnersPhotos/" + winner.photoUrl + ".jpg"}
          ticketNumber={winner.ticketNumber}
        />
      </div>
    );
    return [...slides, slide];
  }
  return slides;
}, []);

export const Default = {
  render: () => (
    <TestimonialsContainer>
      <TestimonialsContent>
        <TestimonialsHeading>Be our next winner</TestimonialsHeading>
        <TestimonialsDescription>Trusted since 2018.</TestimonialsDescription>
      </TestimonialsContent>
      <TestimonialsSlider slides={slides}/>
      <TestimonialsButton>More winners</TestimonialsButton>
      <TestimonialsImage placement='top-right' src={topRightImageSrc} />
      <TestimonialsImage placement='bottom-left' src={bottomLeftImageSrc} />
    </TestimonialsContainer>
  ),
};
