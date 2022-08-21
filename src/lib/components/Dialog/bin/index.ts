/* eslint-disable indent */
import styled, { Theme, css } from 'styled-components';
import animations from './animation';
import { OverlayState } from '../../../types';

type DialogContainerProps = {
  state: OverlayState
};

export interface ThemedProps extends DialogContainerProps {
  theme: Theme;
}

export const DialogContainer = styled.div<ThemedProps>`
  background-color: ${(props: ThemedProps) => props.theme.palette.white}; 
  width: 600px;
  height: fit-content;
  max-height: 600px;
  padding: 30px 10px;
  position: absolute;
  left: 0; 
  right: 0; 
  top: 0; 
  bottom: 0;
  margin: auto; 
  opacity: 0; 
  transform: scale(0);
  border-radius: ${(props: ThemedProps) => props.theme.border.radius}; ;
  
  ${(props: ThemedProps) => {
    if (props.state === 'opened') {
      return css`animation: 300ms ease-out 100ms forwards ${animations.popIn};`;
    }
    return css`animation: 300ms ease-in 0ms forwards ${animations.popOut};`;
  }};

  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.sm}) {
    width: 80%;
    height: fit-content;
    max-height: 300px;
  }
`;

export const DialogFooter = styled.div<{theme: Theme}>`
  display: flex; 
  justify-content: flex-end;
  padding-left: 10px;
  margin: 10px;
  gap: 10px;
  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.sm}) {
    justify-content: stretch;
    flex-direction: column;
    padding-left: 0px; 
    margin: 10px 0px;
  }
`;
