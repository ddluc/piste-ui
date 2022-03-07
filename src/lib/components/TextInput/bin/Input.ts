/* eslint-disable indent */
import styled from 'styled-components';
import { px, transparentize } from '../../../util';

export interface Props {
  error?: boolean;
  size?: 'sm' | 'normal' | 'lg'
}

const Input = styled.input<Props>`
  display: block;
  margin-top: 4px;
  ${({ theme, error }) => {
    if (error) return `border: solid ${theme.border.width} ${theme.palette.danger}`;
    return `border: solid ${theme.border.width} ${theme.palette.neutral[2]}`;
  }};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.neutral[0])};
  padding: 10px 8px 10px 8px;
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: box-shadow .15s ease-in-out; 

  &:focus {
    border-color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.accent.main)};
    box-shadow: ${({ theme, error }) => (
      error ? transparentize(theme.palette.danger, 0.3) : theme.palette.accent.shades[4]
    )} 0px 0px 0px 2px;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.palette.grey};
    background-color: ${({ theme }) => theme.palette.lightgrey};
  }

  &::placeholder {
    font-family: Lato, sans-serif;
    font-weight: 400; 
    font-size: ${({ theme }) => px(theme.fonts.size.small)};
    color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.neutral[1])};
  }

`;

export default Input;
