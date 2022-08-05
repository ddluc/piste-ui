/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge, BadgeProps } from '../index';

import CloseIcon from '../__mocks__/close.svg';
import AlertIcon from '../__mocks__/alert.svg';
import CheckIcon from '../__mocks__/checkmark.svg';
import { Flex } from '../../Flex';

export default {
  title: 'Core/Badge',
  component: Badge,
  args: {
    text: 'a badge',
    type: 'accent',
    disabled: false,
  } as BadgeProps,
  argTypes: {
    onClick: { action: 'click' }
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (<Badge {...args} />);

const IconTemplate: ComponentStory<typeof Badge> = (args: BadgeProps & { iconType: string }) => {
  const { iconType } = args;
  if (iconType === 'close') {
    return <Badge {...args} icon={<CloseIcon height="12px" width="16px" />} />;
  }
  if (iconType === 'alert') {
    return <Badge {...args} icon={<AlertIcon height="12px" width="16px" />} />;
  }
  return <Badge {...args} icon={<CheckIcon height="12px" width="16px" />} />;
};

const GroupTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <Flex gap="5px">
    <Badge
      text="primary"
      type="primary"
    />
    <Badge
      text="accent"
      type="accent"
    />
    <Badge
      text="neutral"
      type="neutral"
    />
    <Badge
      text="alt 1"
      type="vis1"
      icon={<CheckIcon height="12px" width="16px" />}
    />
    <Badge
      type="vis2"
      icon={<AlertIcon height="12px" width="16px" />}
    />
    <Badge
      text="alt 3"
      type="vis3"
    />
    <Badge
      text="alt 4"
      type="vis4"
      icon={<CloseIcon height="12px" width="16px" />}
      iconPosition="right"
      onClick={() => {}}
    />
    <Badge
      text="black"
      type="black"
    />
    <Badge
      text="white"
      type="white"
    />
  </Flex>
);

export const asDefault = Template.bind({});

export const withIcon = IconTemplate.bind({});
withIcon.args = {
  text: 'with icon',
  iconPosition: 'right',
  iconType: 'close',
  type: 'accent',
};

export const asIcon = IconTemplate.bind({});
asIcon.args = {
  text: '',
  iconType: 'check',
  type: 'accent',
};

export const asSuccess = IconTemplate.bind({});
asSuccess.args = {
  text: 'success',
  type: 'success',
  iconType: 'check',
  onClick: null,
};

export const asWarning = IconTemplate.bind({});
asWarning.args = {
  text: 'warning',
  type: 'warning',
  iconType: 'alert',
  onClick: null
};

export const asDanger = IconTemplate.bind({});
asDanger.args = {
  text: 'danger',
  type: 'danger',
  iconType: 'alert',
  onClick: null
};

export const withOverflowText = Template.bind({});
withOverflowText.args = {
  text: 'This is a badge with some really long instructions which breaks the layout'
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  width: 80
};

export const AsBadgeGroup = GroupTemplate.bind({});
AsBadgeGroup.argTypes = {
  text: { table: { disable: true } },
  type: { table: { disable: true } },
  onClick: { table: { disable: true } },
  disabled: { table: { disable: true } },
  icon: { table: { disable: true } },
  iconPosition: { table: { disable: true } }
};
