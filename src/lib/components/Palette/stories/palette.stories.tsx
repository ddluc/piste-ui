import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Palette } from '../index'; 

export default {
  title: 'CSS Utilities/Palette',
  component: Palette,
} as ComponentMeta<typeof Palette>;


const Template: ComponentStory<typeof Palette> = () => {
  return <Palette />; 
};

export const Default = Template.bind({});
