import styled, { Theme } from 'styled-components';
import { px } from '../../../util';

type ContentProps = {
  open?: boolean
  height?: number
};

export interface ThemedProps extends ContentProps {
  theme: Theme;
}

export const Content = styled.div<ThemedProps>`
  overflow: scroll;
  min-height: 0px;
  max-height: ${({ open, height }) => {
    if (open) return px(height);
    return '0px';
  }};
  transition: max-height 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
