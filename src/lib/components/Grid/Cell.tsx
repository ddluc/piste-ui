import { Block } from '../Block'; 
import styled, {Theme} from 'styled-components'; 
import { BaseCSSProperties } from '../../types'; 

// Example component Props
export interface Props extends BaseCSSProperties { 
  column?: { 
    start: string; 
    end: string; 
  }; 
  row?: { 
    start: string; 
    end: string; 
  }; 
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch';
}

export interface ThemedProps extends Props {
  theme: Theme;
}

const Cell = styled(Block)<Props>`
  ${({column}: ThemedProps) => column && `grid-column-start: ${column.start}`};
  ${({column}: ThemedProps) => column && `grid-column-end: ${column.end}`};
  ${({row}: ThemedProps) => row && `grid-row-start: ${row.start}`};
  ${({row}: ThemedProps) => row && `grid-row-end: ${row.end}`};
  ${({justify}: ThemedProps) => justify && `align-self: ${justify}` }; 
  ${({align}: ThemedProps) => align && `align-self: ${align}` }; 
`; 


export default Cell; 
