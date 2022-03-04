import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from '../index'; 

export default {
  title: 'Core/Button',
  component: Button,
  args: { 
    text: 'A scaffolded component'
  } as ButtonProps
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return <Button {...args} />; 
};

export const Main = Template.bind({});
