/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RangeInput, RangeInputProps } from '../index';
import { Block } from '../../Block';

export default {
  title: 'Forms/RangeInput',
  component: RangeInput,
  args: {
    label: 'Range Input'
  } as RangeInputProps
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args: RangeInputProps) => (
  <Block width="400px">
    <RangeInput {...args} />
  </Block>
);

export const Main = Template.bind({});
