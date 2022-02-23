import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fit, FitProps } from '../index'; 

// Mocks
import offPiste from '../mocks/off-piste.jpeg'; 

export default {
  title: 'CSS Utilities/Fit',
  component: Fit,
  args: { 
    cover: true,
    fill: false, 
    scale: false, 
    contain: false, 
    height: '400px', 
    width: '400px', 
    border: 'dashed 1px #4a4a4a', 
    background: { color: '#EDEDED' }, 
  } as FitProps
} as ComponentMeta<typeof Fit>;

const Template: ComponentStory<typeof Fit> = (args: FitProps) => {
  return (
    <Fit {...args}>
      <img src={offPiste} alt="Placeholder Image" />
    </Fit>
  ); 
};

export const Main = Template.bind({});
