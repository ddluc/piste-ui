import styled from 'styled-components';
import { px, getOutline } from '../../../util';

type Props = {
  error?: boolean;
  disabled?: boolean;
  show?: boolean;
};

export const Label = styled.label<Props>`
  display: ${({ show = true }) => (show ? 'flex' : 'none')};
  flex-direction: column; 
  gap: 22px;
  position: relative;
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
`;
