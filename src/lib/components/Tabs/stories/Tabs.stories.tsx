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
    { label: 'Home', id: 'home' },
    { label: 'Profile', id: 'profile' },
    { label: 'Messages', id: 'messages' },
  ],
  activeTab: 0,
};

// Template for main story
export const Main = Template.bind({});
Main.args = {
  tabs: [
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Messages', id: 'messages' },
    { label: 'History', id: 'history' },
    { label: 'Help', id: 'help' },
  ],
  activeTab: 3,
};
