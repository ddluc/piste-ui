/* eslint-disable indent */

import styled from 'styled-components';
import { px, getOutline, transparentize } from '../../../util';
import { pulse } from './animations';

type Props = {
  error?: boolean;
  disabled?: boolean;
};

export const Input = styled.input<Props>`

  // The base input styles
  position: absolute; 
  opacity: 0;
  width: 100%; 
  height: 100%; 
  margin: 0; 
  padding: 0%; 
  cursor: pointer;
  
  // The main radio "container"
  & + label:before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    vertical-align: text-top;
    width: 21px;
    height: 21px;
    background-color: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.1) : theme.palette.neutral[4]
    )};
    border: solid ${({ theme }) => theme.border.width};
    border-color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.accent.main)};
    transition: box-shadow 250ms ease-out; 
  }

  // The radio "fill" icon
  & + label svg {
    content: '';
    position: absolute;
    display: inline-block;
    width: 13px;
    height: 13px;
    left: 5px;
    fill: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.8) : theme.palette.accent.main
    )};
    display: block;    
    animation: ${pulse} 250ms ease both;
  };

  // the radio "fill" (as checked)
  &:checked + label svg {
  }

  // the radio "fill" (as disabled)
  &:disabled + label svg {
    fill: ${({ theme }) => (theme.palette.grey)};
  }
  
  // The main radio "container" on hover
  &:hover + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme, 4)}
  }

  // The main radio "container" on focus
  &:focus + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme, 4)}
  }

  // The main radio "container" as checked
  &:checked + label:before {
    background-color: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.1) : theme.palette.neutral[4]
    )};
  }

  // The main radio "container" as disabled
  &:disabled + label:before {
    box-shadow: none;
    background: ${({ theme }) => theme.palette.lightgrey};
    border-color: ${({ theme }) => theme.palette.grey};
  }

`;

export const Label = styled.label<Props>`
  display: flex; 
  align-items: center;
  color: ${({ theme, error, disabled }) => {
    if (disabled) {
      return theme.palette.neutral[2];
    }
    if (error) {
      return theme.palette.danger;
    }
    return theme.palette.neutral[1];
  }};
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  cursor: pointer; 
  span {
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
`;
