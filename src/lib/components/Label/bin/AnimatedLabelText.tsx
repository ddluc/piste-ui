import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  position: {
    x: number;
    y: number;
  };
  transpose?: {
    x: number;
    y: number;
  };
  scale: number;
  error?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
}

const AnimatedLabelText = styled.span<Props>`
  position: absolute; 
  display: ${({ hideLabel }) => (hideLabel ? 'none' : 'initial')};
  top: ${({ position }) => px(position.y)};
  left: ${({ position }) => px(position.x)};
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  max-width: 100%;
  padding: 0px 2px; 
  margin: 0px; 
  ${({ isActive, transpose, scale }) => isActive && `
    transform: translate(${px(transpose.x)}, ${px(transpose.y)}) scale(${scale});
  `};
  transition: 
    color .1s cubic-bezier(0, 0, 0.2, 1), 
    transform .1s cubic-bezier(0, 0, 0.2, 1); 
  z-index: ${({ theme }) => theme.zIndex[5]};
  background: ${({ disabled, theme }) => {
    if (disabled) return theme.palette.lightgrey;
    return theme.palette.white;
  }};
  color: ${({
    theme, error, disabled, isActive, isFocused
  }) => {
    if (error) return theme.palette.danger;
    if (disabled) return theme.palette.neutral[0];
    if (isFocused) return theme.palette.accent.main;
    if (isActive) return theme.palette.neutral[1];
    return theme.palette.neutral[2];
  }};
`;

export default AnimatedLabelText;
