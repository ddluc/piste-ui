/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, TabsProps } from '../index';

export default {
  title: 'Tabs',
  component: Tabs,
  args: {
    tabs: [
      { label: 'Example Tab 1' },
      { label: 'Example Tab 2' }
    ]
  } as TabsProps
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => (<Tabs {...args} />);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Home' },
    { label: 'Profile' },
    { label: 'Messages' },
  ],
  activeTab: 0,
};

// Template for main story
export const Main = Template.bind({});
Main.args = {
  tabs: [
    { label: 'Dashboard' },
    { label: 'Messages' },
    { label: 'History' },
    { label: 'Help' },
  ],
  activeTab: 0,
};
