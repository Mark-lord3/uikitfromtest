import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Header } from './Header';

export const actionsData = {
  onLogin: action('onLogin'),
  onLogout: action('onLogout'),
  onCreateAccount: action('onCreateAccount'),
};

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: actionsData,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
