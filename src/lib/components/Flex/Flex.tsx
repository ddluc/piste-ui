import { Block } from '../Block'; 
import styled, {Theme} from 'styled-components'; 
import { BaseCSSProperties } from '../../types';

// Example component Props
export interface Props extends BaseCSSProperties {
  // Properties for flex box
  row?: boolean; 
  column?: boolean; 
  reverse?: boolean; 
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flow?: string; 
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'; 
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline';
  gap?: string; 
  // Properties for flex items
  flex?: string;
  grow?: number; 
  shrink?: number; 
  basis?: number; 
  order?: number; 
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
 }; 

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
const Flex = styled(Block)<Props>`
  display: flex; 
  flex-direction: ${({column, reverse}: ThemedProps) => {
    let direction = 'row' 
    if (column) direction = 'column'; 
    if (reverse) direction = `${direction}-reverse`; 
    return direction; 
  }}; 
  ${({wrap}: ThemedProps) => wrap && `flex-wrap: ${wrap}` }; 
  ${({flow}: ThemedProps) => flow && `flex-flow: ${flow}` }; 
  ${({justifyContent}: ThemedProps) => justifyContent && `justify-content: ${justifyContent}` }; 
  ${({alignItems}: ThemedProps) => alignItems && `align-items: ${alignItems}` }; 
  ${({alignContent}: ThemedProps) => alignContent && `align-content: ${alignContent}` }; 
  ${({gap}: ThemedProps) => gap && `gap: ${gap}` }; 
  ${({flex}: ThemedProps) => flex && `flex: ${flex}` }; 
  ${({grow}: ThemedProps) => grow && `flex-grow: ${grow}` }; 
  ${({shrink}: ThemedProps) => shrink && `flex-shrink: ${shrink}` }; 
  ${({basis}: ThemedProps) => basis && `flex-basis: ${basis}` }; 
  ${({order}: ThemedProps) => order && `order: ${order}` }; 
  ${({alignSelf}: ThemedProps) => alignSelf && `align-self: ${alignSelf}` }; 
`; 

export default Flex; 