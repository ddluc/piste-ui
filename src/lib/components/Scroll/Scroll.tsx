import { Block } from '../Block'; 
import styled, {Theme} from 'styled-components'; 
import { BaseCSSProperties } from '../../types';

// Example component Props
export interface Props extends BaseCSSProperties {
  x: boolean, 
  y: boolean,
}; 

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
const Scroll = styled(Block)<Props>`
  ${({x}: ThemedProps) => x && `overflow-x: scroll` }; 
  ${({y}: ThemedProps) => y && `overflow-y: scroll` }; 
`; 

export default Scroll; 