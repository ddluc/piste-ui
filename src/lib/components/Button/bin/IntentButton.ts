/* eslint-disable indent */

import styled, { Theme } from 'styled-components';
import { transparentize } from '../../../util';
import { DefaultButton } from './DefaultButton';

export interface Props {
  intent: 'success' | 'danger' | 'warning';
  variation: 'default' | 'secondary' | 'minimal';
  fluid?: boolean;
  iconPosition?: 'left' | 'right';
}

export const IntentButton = styled(DefaultButton)<Props>`

  ${({ variation }) => (variation === 'minimal' ? 'padding: 2px' : '')};
  ${({ variation }) => (variation === 'minimal' ? 'border: none' : '')};

  color: ${({ theme, variation, intent }) => {
    if (variation === 'default') return theme.palette.white;
    return theme.palette[intent];
  }}; 
  
  background-color: ${({ theme, variation, intent }) => {
    if (variation === 'default') return theme.palette[intent];
    return 'transparent';
  }}; 

  border-color: ${({ theme, variation, intent }) => {
    if (variation === 'minimal') return 'transparent';
    return theme.palette[intent];
  }}; 
  
  fill: ${({ theme, variation, intent }) => {
    if (variation === 'default') return theme.palette.white;
    return theme.palette[intent];
  }}; 

  &:focus {
    border-color: ${({ theme, intent }) => theme.palette[intent]};
    box-shadow: ${({ theme, intent }) => (transparentize(theme.palette[intent], 0.4))} 0px 0px 0px 2px;
  }

  &:hover {
    ${({ variation }) => (variation === 'minimal' ? 'border: none' : '')};
    border-color: ${({ theme, intent }) => theme.palette[intent]};
    box-shadow: ${({ theme, intent, variation }) => {
      if (variation === 'minimal') return 'none';
      return `${transparentize(theme.palette[intent], 0.4)} 0px 0px 0px 2px`;
    }}; 
    transform: translate(0px, -2px); 
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.neutral[2]}; 
    fill: ${({ theme }) => theme.palette.neutral[2]}; 
    background-color: ${({ theme }) => theme.palette.neutral[3]};
    border-color: ${({ theme }) => theme.palette.neutral[3]};
    box-shadow: none; 
    transform: translate(0px, 0px); 
    cursor: not-allowed;
  }

`;
