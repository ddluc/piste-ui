/* eslint-disable indent */
import styled from 'styled-components';
import { getOutline, px, transparentize } from '../../../util';
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
  padding: 0;
  cursor: pointer;

  // The main check "box"
  & + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 18px;
    height: 18px;
    background-color: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.1) : theme.palette.neutral[4]
    )};
    border: solid ${({ theme }) => theme.border.width};
    border-color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.accent.main)};
    border-radius: ${({ theme }) => theme.border.radius}; 
    transition: box-shadow 250ms ease-out; 
  }

  // The checkmark svg
  & + label svg {
    position: absolute;
    pointer-events: none;
    left: ${() => '2px'};
    top: ${() => '2px'};
    width: ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[4]};
    fill: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.8) : theme.palette.white
    )};
    display: block;    
    animation: ${pulse} 250ms ease both;
  }

  // The check mark (as chedked)
  &:checked + label svg {}

  // the check mark (as disabled)
  &:disabled + label svg {
    fill: ${({ theme }) => (theme.palette.grey)};
  }

  // The main check "box" on hover
  &:hover + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme, 4)}
  }

  // The main check "box" on focus
  &:focus + label:before {
    box-shadow: ${({ theme, error }) => getOutline(error, theme, 4)}
  }

  // The main check "box" as checked
  &:checked + label:before {
    background-color: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.1) : theme.palette.accent.main
    )};
  }

  // The main check "box" as disabled
  &:disabled + label:before {
    box-shadow: none;
    background: ${({ theme }) => theme.palette.lightgrey};
    border-color: ${({ theme }) => theme.palette.grey};
  }

`;

// The checkmark label
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
