import React from 'react';
import styled, { css, Theme } from 'styled-components';
import animations from '../animations';
import { AlertPaletteItem } from './Palette';

export type AlertCardProps = {
  state: 'pending' | 'active' | 'complete';
  palette: AlertPaletteItem
};

export interface ThemedProps extends AlertCardProps {
  theme: Theme;
}

export const AlertCard = styled.div<ThemedProps>`
  min-height: 20px; 
  max-width: 320px;
  padding: 20px;
  margin: 10px auto; 
  color: ${({ palette }) => palette.text}; 
  background-color: ${({ palette }) => palette.background};
  box-shadow: 8px 9px 10px 2px rgba(0,0,0,0.1);
  border-top: solid 3px; 
  border-radius:${(props: ThemedProps) => props.theme.border.radius};
  border-color: ${(props: ThemedProps) => props.palette.border}; 
  fill: ${(props: ThemedProps) => props.palette.icon}; 

  ${({ state }: ThemedProps) => {
    if (state === 'active' || state === 'pending') {
      return css`animation: 500ms ease-in-out ${animations.open} forwards;`;
    }
    if (state === 'complete') {
      return css`animation: 500ms ease-in-out ${animations.close} forwards;`;
    }
    return '';
  }}
  
`;
