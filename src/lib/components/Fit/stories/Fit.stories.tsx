import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fit, FitProps } from '../index';

// Mocks
import image from '../__mocks__/ski.jpeg';

export default {
  title: 'CSS Utilities/Fit',
  component: Fit,
  args: {
    fit: 'cover',
    height: '300px',
    width: '300px',
    border: 'dashed 1px #4a4a4a',
    background: { color: '#EDEDED' },
  } as FitProps
} as ComponentMeta<typeof Fit>;

const Template: ComponentStory<typeof Fit> = (args: FitProps) => (
  <Fit {...args}>
    <img src={image} alt="Placeholder" />
  </Fit>
);
export const Main = Template.bind({});
