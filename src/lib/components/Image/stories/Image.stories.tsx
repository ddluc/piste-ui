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
      preview: 'https://piste-ui.s3.us-west-2.amazonaws.com/off-piste--thumbnail.jpg'
    },
    width: 400,
    height: 400,    
    blur: 10, 
    fit: 'cover',
    xpos: 50, 
    ypos: 50
  } as ImageProps
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => {
  return <Image {...args} />; 
};
export const Main = Template.bind({});


const TemplateWithOffsetBlock: ComponentStory<typeof Image> = (args: ImageProps) => {
  return (
    <>
      <Block height="600px">
        <p>Scroll down to see image</p>
      </Block>
      <Image {...args} />
    </>
  );   
};
export const Offscreen = TemplateWithOffsetBlock.bind({});


export const asSkeleton = Template.bind({});
asSkeleton.args = { 
  skeleton: true,
  height: 400, 
  width: 400,
}; 