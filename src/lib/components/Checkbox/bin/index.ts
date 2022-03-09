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
    width: 23px;
    height: 23px;
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
    left: ${({ theme }) => theme.spacing[1]};
    top: ${({ theme }) => theme.spacing[1]};
    width: ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[4]};
    fill: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.8) : theme.palette.body
    )};
    display: block;    
    animation: ${pulse} 250ms ease both;
  }

  // The check mark (as chedked)
  &:checked + label svg {}

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
    background: ${({ theme }) => theme.palette.grey};
  }

  // The the label text  as disabled
  &:disabled + label {
    color: ${({ theme }) => theme.palette.neutral[4]};
    cursor: auto;
  }

`;

// The checkmark label
export const Label = styled.label<Props>`
  display: flex; 
  align-items: center;
  color: ${({ theme, error, disabled }) => {
    if (error) {
      return theme.palette.danger;
    }
    if (disabled) {
      return theme.palette.neutral[2];
    }
    return theme.palette.neutral[1];
  }};
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  cursor: pointer; 
  span {
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
`;
