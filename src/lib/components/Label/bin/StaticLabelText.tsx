import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  error?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
}

const StaticLabelText = styled.span<Props>`
  font-size: ${({ theme }) => px(theme.fonts.size.small - 2)}; 
  display: ${({ hideLabel }) => (hideLabel ? 'none' : 'auto')};
  color: ${({
    theme, error, disabled, isFocused
  }) => {
    if (error) return theme.palette.danger.main;
    if (disabled) return theme.palette.grey;
    if (isFocused) return theme.palette.accent.main;
    return theme.palette.neutral[0];
  }};
`;

export default StaticLabelText;
