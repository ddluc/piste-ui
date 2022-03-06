import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, LabelProps } from '../index'; 

export default {
  title: 'Label',
  component: Label,
  args: { 
    text: 'A scaffolded component'
  } as LabelProps
} as ComponentMeta<typeof Label>;


const Template: ComponentStory<typeof Label> = (args: LabelProps) => {
  return <Label {...args} />; 
};

export const Main = Template.bind({});
