import { css, Theme } from 'styled-components';
import { TextProperties } from '../types';

export interface Props extends TextProperties {}; 

export interface ThemedProps extends Props {
  theme: Theme;
}

export const AbstractTextStyles = css<Props>`
  font-family: ${({ theme }) => theme.fonts.family.body }; ;
  font-weight: ${({ weight }) => weight }; ;
  font-size: ${({ size, theme }) => size || `${theme.fonts.size.normal}px` };
  line-height: ${({ lineHeight, theme }) => lineHeight || `${theme.fonts.size.normal * 1.2}px` };
  margin-top: ${({ spacing }) => spacing || '20px' };
  margin-bottom: ${({ spacing }) => spacing || '20px' };
  ${({ decoration }) => decoration && `text-decoration: ${decoration}` }; 
  ${({ italic }) => italic && `font-style: italic` }; 
  ${({ align }) => align && `text-align: ${align}` };
`;
