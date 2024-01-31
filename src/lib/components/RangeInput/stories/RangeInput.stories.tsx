/* eslint-disable react/jsx-pascal-case */

import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RangeInput, RangeInputProps } from '../index';
import { Block } from '../../Block';

export default {
  title: 'Forms/RangeInput',
  component: RangeInput,
  args: {
    label: 'Range Input',
    value: 0,
    min: 0,
    max: 100,
    units: '%'
  } as RangeInputProps,
  argTypes: {
    value: { control: { type: 'range' } }
  },
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args: RangeInputProps) => (
  <Block width="400px">
    <RangeInput {...args} />
  </Block>
);

const ControlledTemplate: ComponentStory<typeof RangeInput> = (args: RangeInputProps) => {

  const [value, setValue] = React.useState(0);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(parseFloat(e.target.value));

  return (
    <Block width="400px">
      <RangeInput {...args} onChange={onChange} value={value} />
    </Block>
  );
};

export const AsDefault = Template.bind({});
export const AsControlledInput = ControlledTemplate.bind({});
