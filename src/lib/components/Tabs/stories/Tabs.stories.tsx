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

// Template for Tab Group Controlled story
export const Tab = Template.bind({});
Tab.args = {
  tabs: [
    { label: 'Single Tab', name: 'singletab', icon: '' },
  ],
  title: 'Single Tab',
  divider: true,
  active: 0,
};

// Template for Tab Group Controlled story
export const TabGroupControlled = Template.bind({});
TabGroupControlled.args = {
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
// Template for Tab Group Loading story
export const TabGroupLoading = Template.bind({});
TabGroupLoading.args = {
  tabs: [
    { label: 'Friends', name: 'friends', icon: '' },
    { label: 'Relatives', name: 'relatives', icon: '' },
    { label: 'Immediate Family', name: 'family', icon: '' },
  ],
  title: 'Default Title',
  divider: false,
  active: 0,
};
