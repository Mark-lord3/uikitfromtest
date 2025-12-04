import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  primary: true,
  label: 'Delete now',
  backgroundColor: 'red',
};
