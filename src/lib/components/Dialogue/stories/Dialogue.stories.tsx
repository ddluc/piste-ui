/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialogue, DialogueProps } from '../index';
import { Block } from '../../Block';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Typography } from '../../Typography';

const { H1, Body, Text } = Typography;

export default {
  title: 'Dialogue',
  component: Dialogue,
  args: {} as DialogueProps
} as ComponentMeta<typeof Dialogue>;

const Template: ComponentStory<typeof Dialogue> = (args: DialogueProps) => {
  const [show, setShow] = React.useState<boolean>(false);

  const showSideSheet = () => {
    setShow(true);
  };

  const closeSideSheet = () => {
    setShow(false);
  };

  return (
    <Block height="2000px">
      <Button type="button" text="Show Dialouge" onClick={showSideSheet} />
      { show && (
        <Dialogue {...args} onClose={closeSideSheet}>
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
        </Dialogue>
      )}
    </Block>
  );
};

export const Main = Template.bind({});
