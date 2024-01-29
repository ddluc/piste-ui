/* eslint-disable max-len */

import styled, { Theme } from 'styled-components';

export const HeaderCell = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}%` : 'auto')};
  text-align: left;
`;
