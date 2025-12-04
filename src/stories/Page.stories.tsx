import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Components/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...HeaderStories.actionsData,
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
