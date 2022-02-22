import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Test, TestProps } from '../index'; 

export default {
  title: 'Test',
  component: Test,
  args: { 
    text: 'A scaffolded component'
  } as TestProps
} as ComponentMeta<typeof Test>;


const Template: ComponentStory<typeof Test> = (args: TestProps) => {
  return <Test {...args} />; 
};

export const Main = Template.bind({});
