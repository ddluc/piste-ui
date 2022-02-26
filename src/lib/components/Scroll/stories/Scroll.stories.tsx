import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Flex';
import { Scroll, ScrollProps } from '../index';

export default {
  title: 'CSS Utilities/Scroll',
  component: Scroll,
  args: {
    direction: 'x',
    height: '400px',
    width: '400px',
    border: 'dashed 1px #4a4a4a',
    padding: ['20px', '20px', '20px', '20px'],
    background: { color: '#EDEDED' },
  } as ScrollProps
} as ComponentMeta<typeof Scroll>;

const Template: ComponentStory<typeof Scroll> = (args: ScrollProps) => (
  <Scroll {...args}>
    <Flex
      center
      height="800px"
      width="100%"
      border="dashed 1px #4a4a4a"
      background={{ color: '#A5B0AE' }}
    >
      Content
    </Flex>
  </Scroll>
);

export const Main = Template.bind({});
