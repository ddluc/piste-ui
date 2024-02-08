/* eslint-disable indent */
import styled from 'styled-components';
import { px, getOutline } from '../../../util';

export interface Props {
  error?: boolean;
  size?: 'sm' | 'normal' | 'lg';
}

export const Input = styled.input<Props>`
  display: block;
  margin-top: 2px;
  height: 42px;
  ${({ theme, error }) => {
    if (error) return `border: solid ${theme.border.width} ${theme.palette.danger.main}`;
    return `border: solid ${theme.border.width} ${theme.palette.neutral[2]}`;
  }};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${({ theme, error }) => (error ? theme.palette.danger.main : theme.palette.neutral[0])};
  padding: 2px 10px;
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: box-shadow .15s ease-in-out; 

  &:focus {
    border-color: ${({ theme, error }) => (error ? theme.palette.danger.main : theme.palette.accent.main)};
    box-shadow: ${({ theme, error }) => getOutline(error, theme, 4)}
  }

  &:disabled {
    border-color: ${({ theme }) => theme.palette.grey};
    background-color: ${({ theme }) => theme.palette.lightgrey};
  }

  &::placeholder {
    font-weight: 400; 
    font-size: ${({ theme }) => px(theme.fonts.size.small)};
    color: ${({ theme, error }) => (error ? theme.palette.danger.main : theme.palette.neutral[1])};
  }

`;
