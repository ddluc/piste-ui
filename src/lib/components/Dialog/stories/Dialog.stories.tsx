/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, DialogProps } from '../index';
import { Block } from '../../Block';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Typography } from '../../Typography';

import TrashIcon from '../__mocks__/trash.svg';

const { H1, Body, Text } = Typography;

export default {
  title: 'Dialogue',
  component: Dialog,
  args: {} as DialogProps,
  argTypes: {
    onClose: { action: 'close' },
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args: DialogProps) => {

  const [show, setShow] = React.useState<boolean>(false);
  const { onClose } = args;

  const showDialog = () => {
    setShow(true);
  };

  const closeDialog = () => {
    setShow(false);
    onClose();
  };

  return (
    <Block height="2000px">
      <Button type="button" text="Show Dialouge" onClick={showDialog} />
      { show && (
        <Dialog {...args} onClose={closeDialog}>
          <Block padding={['10px', '0px', '0px', '0px']}>
            <H1>Hello!</H1>
            <Divider />
            <Body>This is the content Body</Body>
            <Body>
              Cras consectetur nulla at leo interdum venenatis. Mauris laoreet congue massa
              sit amet mattis. Integer finibus accumsan varius. Nam eget libero finibus,
              pellentesque dolor non, pretium est. Morbi purus tortor, varius vel mollis at,
              vulputate nec nisi. Vivamus sit amet urna pulvinar, suscipit magna et, auctor arcu.
              Aliquam at erat hendrerit, ornare augue non, volutpat est. Sed congue justo sed
            </Body>
          </Block>
        </Dialog>
      )}
    </Block>
  );
};

export const asDefault = Template.bind({});

export const withoutFooter = Template.bind({});
withoutFooter.args = {
  showFooter: false
};

export const withIntent = Template.bind({});
withIntent.args = {
  confirmIcon: <TrashIcon height="16px" width="16px" />,
  confirmText: 'Delete',
  intent: 'danger'
};
