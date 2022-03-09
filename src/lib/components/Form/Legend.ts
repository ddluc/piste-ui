import styled from 'styled-components';
import { px } from '../../util';

interface Props {
  error?: boolean;
}

const Legend = styled.legend<Props>`
  font-size: ${({ theme }) => px(theme.fonts.size.small)};
  color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.neutral[0])};
`;

export default Legend;
