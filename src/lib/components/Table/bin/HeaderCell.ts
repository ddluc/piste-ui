/* eslint-disable max-len */

import styled, { Theme } from 'styled-components';

export const HeaderCell = styled.th<{ width?: string }>`
  width: ${(props) => props.width || 'auto'};
  text-align: left;
`;
