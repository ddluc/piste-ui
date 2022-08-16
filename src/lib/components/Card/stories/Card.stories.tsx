import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardProps } from '../index';
import { Typography } from '../../Typography';

export default {
  title: 'Core/Card',
  component: Card,
  args: {
    width: '400px',
    elevation: 0,
  } as CardProps
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <Typography.H1>This is a Card</Typography.H1>
    <Typography.Body>This is a Card</Typography.Body>
  </Card>
);

export const asDefault = Template.bind({});

export const withElevation = Template.bind({});
withElevation.args = {
  elevation: 4
};
