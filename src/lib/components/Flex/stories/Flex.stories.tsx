import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, FlexProps } from '../index'; 

export default {
  title: 'CSS Utilities/Flex',
  component: Flex,
  args: { 
    display: 'flex',
    row: true, 
    column: false,  
    reverse: false,
    wrap: 'wrap', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    alignContent: 'center', 
    gap: '10px 10px',
    height: '50px',
    width: '800px', 
    padding: ['5px', '5px', '5px', '5px'],
    border: 'dashed 1px #4a4a4a', 
    opacity: 1, 
    background: { color: '#EDEDED' }, 
  } as FlexProps
} as ComponentMeta<typeof Flex>;

const defaultFlexItemProps = { 
  display: 'flex',
  height: '40px',
  width: '40px',
  border: 'dashed 1px #4a4a4a', 
  background: { color: '#A5B0AE'},
  alignItems: 'center',
  justifyContent: 'center'
} as FlexProps; 

const Template: ComponentStory<typeof Flex> = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Flex {...defaultFlexItemProps} grow={1} >
        Box
      </Flex>
      <Flex {...defaultFlexItemProps} grow={3} >
        Box
      </Flex>
      <Flex {...defaultFlexItemProps} grow={2} >
        Box
      </Flex>
    </Flex>
  ); 
};

export const Main = Template.bind({});
