import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Block } from '../../Block';
import { Image, ImageProps } from '../index';

export default {
  title: 'Core/Image',
  component: Image,
  argTypes: {
    xpos: { control: { type: 'range' } },
    ypos: { control: { type: 'range' } },
  },
  args: {
    src: {
      main: 'https://piste-ui.s3.us-west-2.amazonaws.com/off-piste.jpeg',
    },
    width: 400,
    height: 400,
    fit: 'cover',
    xpos: 50,
    ypos: 50
  } as ImageProps
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => <Image {...args} />;

const TemplateWithOffsetBlock: ComponentStory<typeof Image> = (args: ImageProps) => (
  <>
    <Block height="600px">
      <p>Scroll down to see image</p>
    </Block>
    <Image {...args} />
  </>
);

export const Main = Template.bind({});

export const withProgressiveLoading = Template.bind({});
withProgressiveLoading.args = {
  src: {
    main: 'https://piste-ui.s3.us-west-2.amazonaws.com/off-piste.jpeg',
    preview: 'https://piste-ui.s3.us-west-2.amazonaws.com/off-piste--thumbnail.jpg'
  },
  blur: 10
};

export const isOffscreen = TemplateWithOffsetBlock.bind({});
isOffscreen.args = {
  src: {
    main: 'https://piste-ui.s3.us-west-2.amazonaws.com/off-piste.jpeg',
    preview: 'https://piste-ui.s3.us-west-2.amazonaws.com/off-piste--thumbnail.jpg'
  },
  blur: 10
};

export const asSkeleton = Template.bind({});
asSkeleton.args = {
  skeleton: true,
  height: 400,
  width: 400,
};
