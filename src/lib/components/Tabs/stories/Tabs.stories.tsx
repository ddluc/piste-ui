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
    { label: 'Home', name: 'home', icon: '' },
    { label: 'Profile', name: 'profile', icon: '' },
    { label: 'Messages', name: 'messages', icon: '' },
  ],
  title: 'Default Title',
  divider: false,
  active: 0,
};

// Template for main story
export const Main = Template.bind({});
Main.args = {
  tabs: [
    { label: 'Dashboard', name: 'dashboard', icon: '' },
    { label: 'Messages', name: 'messages', icon: ''  },
    { label: 'History', name: 'history', icon: '' },
    { label: 'Help', name: 'help', icon: '' },
  ],
  title: 'Main Title',
  divider: true,
  active: 3,
};
