import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';
import { Divider, DividerProps } from '../index'; 

export default {
  title: 'Layout/Divider',
  component: Divider,
  args: {
    type: 'horizontal',
    solid: true, 
    dashed: false, 
    text: '',
    size: 1,
    spacing: { 
      top: '15px', 
      bottom: '15px',
      right: '15px', 
      left: '15px'
    },
    alignment: 'left',
    width: '60%',
    height: '200px'
  } as DividerProps
} as ComponentMeta<typeof Divider>;


const DividerWithContent = (args: DividerProps) => {
  return (
    <Flex row={args.type === 'vertical'} column={args.type === 'horizontal'} width='100%'>
      <Flex center={args.type === 'vertical'}>
        <Typography.Body spacing={{ top: '0px', bottom: '0px'}}>
          Here is some content
        </Typography.Body>
      </Flex>
      <Divider {...args} />
      <Flex center={args.type === 'vertical'}>
        <Typography.Body spacing={{ top: '0px', bottom: '0px'}}>
          Here is some other content
        </Typography.Body>
      </Flex>
    </Flex>
  ); 
}; 


const Template: ComponentStory<typeof DividerWithContent> = (args: DividerProps) => {
  return <DividerWithContent {...args} />; 
};

export const Main = Template.bind({});
