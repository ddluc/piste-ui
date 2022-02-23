import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Scale, ScaleProps } from '../index'; 

export default {
  title: 'CSS Utilities/Scale',
  component: Scale,
  args: { 
    xs: '80%',
    sm: '500px', 
    md: '800px', 
    lg: '1000px', 
    height: '400px',
    border: 'dashed 1px #4a4a4a', 
    margin: ['0', 'auto', '0', 'auto'],
    opacity: 1, 
    background: { color: '#EDEDED' }, 
  } as ScaleProps
} as ComponentMeta<typeof Scale>;


const Template: ComponentStory<typeof Scale> = (args: ScaleProps) => {
  return <Scale {...args} />; 
};

export const Main = Template.bind({});
