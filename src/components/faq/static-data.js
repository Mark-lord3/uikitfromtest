import React from "react";
import { AWS_S3_URL } from "../../constants";

export const faqs = [
  {
    title: "Our prize philosophy",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            We believe that dream homes are just as unique as you. Your dream home may be a
            countryside manor, or a sleek city penthouse. Whatever it is, it’s your dream home, not
            someone else’s. That’s why we offer you the chance to win the Dream Home Draw when you
            enter or take the cash alternative to buy or build your perfect home.
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "How to enter",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            Head to <a href=''>the ticket selector</a> and choose your bundle.
          </li>
          <li>
            Enter your email at checkout – we’ll create an account for you using this email, and you
            can activate it when you receive your tickets via email.
          </li>
          <li>
            We’ll email you a ticket receipt immediately and you can view your tickets online as
            well.
          </li>
          <li>
            You can choose to make a one-off purchase or subscribe for more benefits. Or enter for
            free via our postal entry method.
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "Free entry",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            Every single one of our Bonus Draw and Dream Home Draw competitions can be entered for
            free, via a postal entry.
          </li>
          <li>
            Find out more about the free entry <a href=''>here</a>.
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "Subscriptions",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            Benefit from triple the usual entries by subscribing to one of our monthly packages and
            never miss a draw.
          </li>
          <li>Enjoy the benefits of remaining a subscriber for weekly bonuses.</li>
          <li>
            Find out more about our subscription packages <a href=''>here</a>.
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "The Draw",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            The Bonus Draw and Dream Home competition draws are conducted and managed by Civica, our
            third-party draw-management partner. The winner is drawn on the fifth working day after
            the conclusion of a competition, which allows for the receipt of postal entries.
          </li>
          <li>
            If you enter before a Bonus Draw concludes, every Dream Home Draw ticket you buy will
            also give you the chance to win the Bonus Draw as well.
          </li>
          <li>
            Winners are contacted by email and phone by one of our brand representatives – we don’t
            want you to miss this life-changing moment, and so you have 21-days to respond to us –
            and we’ll keep trying you every day until we hear from you!
          </li>
          <li>
            In the event we don’t sell enough tickets to award the full prize, the winner will
            receive 70% of the take, net of costs. See the T&Cs for more information{" "}
            <a href=''>here</a>
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "Donations",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            Every time you enter, you’ll have the chance to support one of our charity partners or
            donate to a charity that is close to your heart. 10% of your ticket proceeds will be
            donated, net of costs.
          </li>
          <li>
            We make the multiple donations once a year on your behalf after a third-party accountant
            has compiled and filed our year-end accounts at Companies House.
          </li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "Chat to us",
    description: (
      <React.Fragment>
        <ul className='faq-list dark'>
          <li>
            Kathie, Agneta, and Alex from our Customer Support Team are available as near to 24/7 as
            human rights laws allow for any questions you may have. Click contact us from the menu
            or footer to say hi!
          </li>
        </ul>
      </React.Fragment>
    ),
  },
];

export const images = [
  `${AWS_S3_URL}gallery/home/TheKentDreamHome_800x600.jpg`,
  `${AWS_S3_URL}gallery/home/Kitchen_800x600.jpg`,
  `${AWS_S3_URL}gallery/home/DiningRoom_800x600.jpg`,
  `${AWS_S3_URL}gallery/home/SittingRoom_800x600.jpg`,
  `${AWS_S3_URL}gallery/home/LivingRoom_800x600.jpg`,
  `${AWS_S3_URL}gallery/home/Bedrooms_800x600.jpg`,
  `${AWS_S3_URL}gallery/home/Bathrooms_800x600.jpg`,
];
