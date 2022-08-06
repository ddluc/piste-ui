import styled, { css, Theme } from 'styled-components';
import animations from '../animations';

type AlertCardProps = {
  state: 'pending' | 'active' | 'complete';
};

export interface ThemedProps extends AlertCardProps {
  theme: Theme;
}

export const AlertCard = styled.div<ThemedProps>`
  min-height: 20px; 
  max-width: 320px;
  padding: 20px;
  margin: 10px auto; 
  background-color: ${(props: ThemedProps) => props.theme.palette.white}; 
  box-shadow: 8px 9px 10px 2px rgba(0,0,0,0.1);
  border-top: solid 3px; 
  border-color: ${(props: ThemedProps) => props.theme.palette.primary.main}; 
  border-radius:${(props: ThemedProps) => props.theme.border.radius};
  transform: translateY(-1000%);

  ${({ state }: ThemedProps) => {
    if (state === 'active') {
      return css`animation: 500ms ease-in-out ${animations.open} forwards;`;
    }
    if (state === 'complete') {
      return css`animation: 500ms ease-in-out ${animations.close} forwards;`;
    }
    return '';
  }}
  
`;
