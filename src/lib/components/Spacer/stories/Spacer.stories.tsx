/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacer, SpacerProps } from '../index';

export default {
  title: 'Spacer',
  component: Spacer,
  args: {
    spacing: 1,
    debug: true
  } as SpacerProps
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args: SpacerProps) => (<Spacer {...args} />);

export const Main = Template.bind({});
