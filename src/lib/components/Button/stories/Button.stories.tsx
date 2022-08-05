import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from '../index';

import SettingsIcon from '../__mocks__/settings.svg';
import TrashIcon from '../__mocks__/trash.svg';
import RestartIcon from '../__mocks__/restart.svg';

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    text: 'Learn More',
    variation: 'default',
    intent: 'none',
    fluid: false,
  } as ButtonProps
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

const IconTemplate: ComponentStory<typeof Button> = (args: ButtonProps & { iconType: string}) => {
  const { iconType, ...baseArgs } = args;
  if (iconType === 'trash') {
    return <Button {...baseArgs} icon={<TrashIcon height="16px" width="16px" />} />;
  }
  if (iconType === 'restart') {
    return <Button {...baseArgs} icon={<RestartIcon height="16px" width="16px" />} />;
  }
  return <Button {...baseArgs} icon={<SettingsIcon height="16px" width="16px" />} />;
};

export const asDefault = Template.bind({});

export const asSecondary = Template.bind({});
asSecondary.args = {
  variation: 'secondary'
};

export const withIcon = IconTemplate.bind({});
withIcon.args = {
  text: 'Settings',
  iconPosition: 'left',
  variation: 'secondary'
};

export const asIcon = IconTemplate.bind({});
asIcon.args = {
  text: '',
  variation: 'secondary'
};

export const asDanger = IconTemplate.bind({});
asDanger.args = {
  intent: 'danger',
  text: 'Danger',
  iconType: 'trash'
};

export const asSuccess = Template.bind({});
asSuccess.args = {
  intent: 'success',
  text: 'Success'
};

export const asWarning = Template.bind({});
asWarning.args = {
  intent: 'warning',
  text: 'Warning',
};

export const asMinimal = IconTemplate.bind({});
asMinimal.args = {
  text: '',
  variation: 'minimal'
};

export const asMinimalIntent = IconTemplate.bind({});
asMinimalIntent.args = {
  text: '',
  variation: 'minimal',
  intent: 'danger',
  iconType: 'trash'
};

export const withOverflowText = Template.bind({});
withOverflowText.args = {
  text: 'This is a button with some really long instructions which breaks the layout'
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  width: 120,
  height: 40,
};
