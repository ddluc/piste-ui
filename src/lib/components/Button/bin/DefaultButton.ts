import React from 'react';
import styled from 'styled-components';
import { px } from '../../../util';

// Example component Props
export interface Props {
  fluid?: boolean;
  iconPosition?: 'left' | 'right';
}

// Defined a styled component implmementation
export const DefaultButton = styled.button<Props>`
  display: flex; 
  justify-content: 'space-beteween';
  align-content: center;
  gap: 0px ${({ theme }) => theme.spacing[2]}; ; 
  flex-direction: ${({ iconPosition }) => (iconPosition === 'right' ? 'row-reverse' : 'row')}; 
  background-color: ${({ theme }) => theme.palette.primary.main}; 
  color: ${({ theme }) => theme.palette.primary.contrastText}; 
  border: ${({ theme }) => `solid ${theme.border.width}`}; 
  border-color: ${({ theme }) => theme.palette.primary.main}; 
  border-radius: ${({ theme }) => theme.border.radius}; 
  font-family:  ${({ theme }) => theme.fonts.family.display}; 
  font-size:  ${({ theme }) => px(theme.fonts.size.small)}; 
  line-height: ${({ theme }) => px(theme.fonts.size.normal + 6)}; 
  padding: ${({ theme }) => theme.spacing[2]};
  ${({ fluid }) => {
    if (fluid) return 'width: 100%';
    return 'max-width: 220px';
  }};
  outline: none; 
  transition: 
    transform 250ms ease,
    box-shadow 250ms ease;
  fill: ${({ theme }) => theme.palette.primary.contrastText}; 

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.shades[2]};
    box-shadow: ${({ theme }) => (theme.palette.primary.shades[4])} 0px 0px 0px 2px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.shades[2]};
    box-shadow: ${({ theme }) => (theme.palette.primary.shades[4])} 0px 0px 0px 2px;
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
