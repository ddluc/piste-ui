import styled, {Theme} from 'styled-components'; 
import { TextProperties } from '../types';
import { AbstractTextStyles } from './AbstractText';

// Example component Props
export interface Props extends TextProperties {
  style?: string; 
  indent?: string; 
}; 

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
export const UnorderedList = styled.ol<Props>`
  ${AbstractTextStyles}
  ${({ style }) => style && `list-style: ${style}` }; 
  padding-left: ${({ indent = '40px' }) => indent }; 
  line-height: initial;
`; 

// Defined a styled component implmementation
export const OrderedList = styled.ul<Props>`
  ${AbstractTextStyles}
  ${({ style }) => style && `list-style: ${style}` }; 
  padding-left: ${({ indent = '40px' }) => indent }; 
  line-height: initial;
`; 

// Defined a styled component implmementation
export const ListItem = styled.li<Props>`
  ${AbstractTextStyles}
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px` };
  line-height: ${({ lineHeight, theme }) => lineHeight || `${Math.floor(theme.fonts.size.normal * 1)}px` }; ;
  margin-top: ${({ spacing }) => spacing || '10px' };
  margin-bottom: ${({ spacing }) => spacing || '10px' };
`; 