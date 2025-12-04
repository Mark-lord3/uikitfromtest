import LearnMore from "./learn-more";

export default {
  title: "Common/Learn More",
  component: LearnMore,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: 'color' },
  },
}

export const Default = {
  args: {
    href: 'http://example.com'
  }
}