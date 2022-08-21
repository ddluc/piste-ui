/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidesheet, SidesheetProps } from '../index';
import { Block } from '../../Block';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Typography } from '../../Typography';

const { H1, Body, List } = Typography;

export default {
  title: 'Core/Sidesheet',
  component: Sidesheet,
  args: {} as SidesheetProps
} as ComponentMeta<typeof Sidesheet>;

const SideSheetContent = (): JSX.Element => (
  <Block padding={['10px', '0px', '0px', '0px']}>
    <Divider />
    <H1>
      Hello!
    </H1>
    <Body>You can insert whatever content you like in here.</Body>
    <Body>You can close the sidesheet by:</Body>
    <List.Unordered>
      <List.Item>Clicking the close button</List.Item>
      <List.Item>Hitting the escape key</List.Item>
      <List.Item>Clicking the overlay background</List.Item>
    </List.Unordered>
    <Divider />
  </Block>
);

const ControlledTemplate: ComponentStory<typeof Sidesheet> = (args: SidesheetProps) => {
  const [show, setShow] = React.useState<boolean>(false);

  const showSideSheet = () => {
    setShow(true);
  };

  const closeSideSheet = () => {
    setShow(false);
  };

  return (
    <Block height="2000px">
      <Button type="button" text="Show Sidesheet" onClick={showSideSheet} />
      <Sidesheet {...args} show={show} onClose={closeSideSheet}>
        <SideSheetContent />
      </Sidesheet>
    </Block>
  );
};

const Template: ComponentStory<typeof Sidesheet> = (args: SidesheetProps) => (
  <Sidesheet {...args}>
    <SideSheetContent />
  </Sidesheet>
);

export const asDefault = Template.bind({});
export const asControlled = ControlledTemplate.bind({});
