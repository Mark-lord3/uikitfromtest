import React from "react";
import FaqContainer from "./faq-container/faq-container";
import FaqHeading from "./faq-heading/faq-heading";
import FaqQuestions from "./faq-questions/faq-questions";
import FaqAccordion from "./faq-accordion/faq-accordion";
import FaqFooter from "./faq-footer/faq-footer";
import FaqImage from "./faq-image/faq-image";
import { faqs, images } from "./static-data";
import { AWS_S3_URL } from "../../constants";
import FaqInfo from "./faq-info/faq-info";
import FaqInfoTitle from "./faq-info/faq-info-title/faq-info-title";
import FaqInfoLearnMore from "./faq-info/faq-info-learn-more/faq-info-learn-more";
import FaqInfoText from "./faq-info/faq-info-text/faq-info-text";
import FaqInfoChat from "./faq-info/faq-info-chat/faq-info-chat";
import man1 from "../../images/got-a-question/man-1.jpg";
import man2 from "../../images/got-a-question/man-2.jpg";
import man3 from "../../images/got-a-question/man-3.jpg";
import FaqInfoLinks from "./faq-info/faq-info-links/faq-info-links";
import FaqSlider from "./faq-slider/faq-slider";

export default {
  title: "Main/FAQ",
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => (
    <FaqContainer>
      <FaqQuestions>
        <FaqHeading>FAQs</FaqHeading>
        <FaqAccordion items={faqs} />
      </FaqQuestions>
      <FaqFooter>
        <FaqImage src={AWS_S3_URL + "got-a-question/got-a-question-5.jpg"} />
        <FaqSlider images={images} />
        <FaqInfo>
          <FaqInfoTitle>Got a question?</FaqInfoTitle>
          <FaqInfoLearnMore>How It Works</FaqInfoLearnMore>
          <FaqInfoText>We're here for you just about 24/7</FaqInfoText>
          <FaqInfoChat title='Chat to Kathie, Alex and Agneta' images={[man1, man2, man3]} />
          <FaqInfoLinks />
        </FaqInfo>
      </FaqFooter>
    </FaqContainer>
  ),
};
