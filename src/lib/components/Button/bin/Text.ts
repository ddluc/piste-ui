import styled from 'styled-components';
import { px } from '../../../util';

type Props = {};

export const ButtonText = styled.span<Props>`
  flex-grow: 1; 
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
