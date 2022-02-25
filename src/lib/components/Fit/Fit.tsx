import styled, { Theme } from 'styled-components';
import { Block } from '../Block';
import { BaseCSSProperties } from '../../types';

export interface Props extends BaseCSSProperties {
  fill?: boolean;
  contain?: boolean;
  cover?: boolean;
  scale?: boolean;
  align: string;
}

// Extend the Component props with the injected theme
export interface ThemedProps extends Props {
  theme: Theme;
}

// Defined a styled component implmementation
const Fit = styled(Block)<Props>`
  > * {
    object-fit: ${({
    fill, contain, cover, scale
  }: ThemedProps) => {
    if (fill) return 'fill';
    if (contain) return 'contain';
    if (cover) return 'cover';
    if (scale) return 'scale-down';
    return 'none';
  }};
    height: 100%; 
    width:  100%; 
    object-position: ${({ align }) => (align || '50% 50%')};
  }; 
`;

// Export the component as the default export
export default Fit;
