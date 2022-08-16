import styled, { Theme } from 'styled-components';
import { px, getOutline } from '../../../util';

type SelectInputProps = {
  error: boolean
};

export interface ThemedProps extends SelectInputProps {
  theme: Theme;
}

export const Input = styled.select<ThemedProps>`
  display: block;
  width: 100%;
  padding: 10px 8px 10px 8px;
  ${({ theme, error }) => {
    if (error) return `border: solid ${theme.border.width} ${theme.palette.danger}`;
    return `border: solid ${theme.border.width} ${theme.palette.neutral[2]}`;
  }};
  border-radius: ${({ theme }) => theme.border.radius};
  border-color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.accent.main)};
  outline: none;
  background-color: ${({ theme }) => theme.palette.white};
  margin-top: 4px;
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  color: ${({ theme, error, value }) => {
    if (error) return theme.palette.danger;
    return (value === 'default' ? theme.palette.neutral[2] : theme.palette.neutral[0]);
  }};
  box-sizing: border-box;
  transition: box-shadow .15s ease-in-out; 
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border-color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.accent.main)};
    box-shadow: ${({ theme, error }) => getOutline(error, theme, 4)}
  }

  &:disabled {
    border-color: ${({ theme }) => theme.palette.grey};
    background-color: ${({ theme }) => theme.palette.lightgrey};
  }

  &::placeholder {
    font-weight: 400; 
    font-size: ${({ theme }) => px(theme.fonts.size.small)};
    color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.neutral[1])};
  }
  
`;
