import styled, { css, Theme } from 'styled-components';

type AlertBoxProps = {};

export interface ThemedProps extends AlertBoxProps {
  theme: Theme;
}

// Defined a styled component implmementation
export const AlertBox = styled.div<ThemedProps>`
  position: fixed; 
  width: 320px; 
  top: 10px; 
  left: 50%;
  transform: translate(-50%, 0);
`;
