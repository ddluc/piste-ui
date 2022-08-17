import styled, { Theme } from 'styled-components';

export interface Props {
  spacing: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
  debug?: boolean
}

export interface ThemedProps extends Props {
  theme: Theme;
}

const Spacer = styled.div<ThemedProps>`
  height: ${({ theme, spacing }) => theme.spacing[spacing - 1]};
  background-color: ${({ theme, debug }) => debug && theme.palette.lightgrey};
  border: ${({ theme, debug }) => debug && `dashed 1px ${theme.palette.grey}`};
`;

export default Spacer;
