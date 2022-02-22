import styled, {Theme} from 'styled-components'; 

type ThemeColors = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'grey' | 'lightgrey' | 'visualization'; 

type ColorBoxProps = { 
  color: ThemeColors, 
  shade?: number, 
}; 

export interface ThemedProps extends ColorBoxProps {
  theme: Theme;
}

export const ColorBox = styled.div<ColorBoxProps>`
  height: 20px; 
  width: 20px;   
  background-color: ${({ color, shade = null, theme }: ThemedProps): string => {
    if (color === 'primary' || color === 'accent') {
      if ( shade !== null ) return theme.palette[color].shades[shade]; 
      return theme.palette[color].main; 
    } 
    if (color === 'visualization') {
      return theme.palette[color][shade]; 
    }
    return theme.palette[color];
  }};
`; 