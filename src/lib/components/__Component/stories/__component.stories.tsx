import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { __Component, __ComponentProps } from '../index'; 

export default {
  title: '__Component',
  component: __Component,
  args: { 
    text: 'This is a scaffolding component which is used to create consistently structured react components'
  } as __ComponentProps
} as ComponentMeta<typeof __Component>;


const Template: ComponentStory<typeof __Component> = (args: __ComponentProps) => {
  return <__Component {...args} />; 
};

export const Main = Template.bind({});
