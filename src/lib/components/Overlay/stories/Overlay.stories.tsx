/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overlay, OverlayProps } from '../index';
import { Block } from '../../Block';
import { Button } from '../../Button';

export default {
  title: 'Overlay',
  component: Overlay,

} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args: OverlayProps) => {

  const [show, setShow] = React.useState<boolean>(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <Block height="2000px">
      <Button type="button" text="Show Overlay" onClick={showOverlay} />
      { show && (
        <Overlay {...args} onClose={hideOverlay} />
      )}
    </Block>
  );
};

export const Main = Template.bind({});
