import styled, { Theme } from 'styled-components';
import { px, getOutline, transparentize } from '../../../util';

export type Props = {
  error?: boolean
  disabled?: boolean
}

const getThumbColor = (theme: Theme, error: boolean, disabled: boolean) => {
  if (disabled) {
    return theme.palette.neutral[2];
  }
  if (error) {
    return theme.palette.danger;
  }
  return theme.palette.accent.main;
};

const getRailColor = (theme: Theme, error: boolean, disabled: boolean) => {
  if (disabled) {
    return theme.palette.lightgrey;
  }
  if (error) {
    return transparentize(theme.palette.danger, 0.1);
  }
  return theme.palette.neutral[3];
};

export const Slider = styled.input<Props>`

  -webkit-appearance: none; 
  appearance: none;
  width: 100%;
  height: 8px;
  background: ${({ theme, error, disabled }) => getRailColor(theme, error, disabled)};
  outline: none;
  opacity: 0.7; 
  -webkit-transition: .2s;
  transition: opacity .2s;

  &:hover {
    opacity: 1; 
    &::-webkit-slider-thumb { 
      border: ${({ theme }) => theme.palette.accent.shades[3]};
      box-shadow: ${({ theme, error, disabled }) => !disabled && getOutline(error, theme, 4)}
    }
    &::-moz-range-thumb {
      border: ${({ theme }) => theme.palette.accent.shades[3]};
      box-shadow: ${({ theme, error, disabled }) => !disabled && getOutline(error, theme, 4)}
    }
  }

  &::-webkit-slider-thumb {
    opacity: 1;
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%; 
    background: ${({ theme, error, disabled }) => getThumbColor(theme, error, disabled)};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    opacity: 1;
    width: 18px;
    height: 18px;
    border-radius: 50%; 
    background: ${({ theme, error, disabled }) => getThumbColor(theme, error, disabled)};
    cursor: pointer;
  }
`;
