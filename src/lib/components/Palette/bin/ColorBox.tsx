import styled, { Theme } from 'styled-components';

type ThemeColors = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'grey' | 'lightgrey' | 'neutral' | 'visualization';

type ColorBoxProps = {
  color: ThemeColors,
  shade?: number,
  border?: string,
};

export interface ThemedProps extends ColorBoxProps {
  theme: Theme;
}

export const getThemeColor = ({ color, shade = null, theme }: ThemedProps): string => {
  if (color === 'primary' || color === 'accent') {
    if (shade !== null) return theme.palette[color].shades[shade];
    return theme.palette[color].main;
  }
  if (color === 'visualization' || color === 'neutral') {
    return theme.palette[color][shade];
  }
  return theme.palette[color];
};

export const ColorBox = styled.div<ColorBoxProps>`
  height: 40px; 
  width: 40px;
  margin: 5px 5px 5px 5px;    
  border: ${({ border }) => (border ? `solid 1px ${border}` : '')}; 
  background-color: ${getThemeColor};
`;

export const BrandColorBox = styled.div<ColorBoxProps>`
  height: 40px; 
  width: 40px;   
  margin: 5px 20px 5px 5px; 
  border: ${({ border }) => (border ? `solid 1px ${border}` : '')}; 
  background-color: ${getThemeColor};
`;
