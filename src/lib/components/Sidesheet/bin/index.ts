import styled, { css, Theme } from 'styled-components';
import animations from './animation';
import { OverlayState } from '../../../types';

type SidesheetState = OverlayState;

type SideSheetContainerProps = {
  state: SidesheetState
};

export interface ThemedProps extends SideSheetContainerProps {
  theme: Theme;
}

export const SideSheetContainer = styled.div<ThemedProps>`
  background-color: ${(props: ThemedProps) => props.theme.palette.white}; 
  width: 500px; 
  height: 100%;
  padding: 30px 10px;
  position: absolute;
  right: -500px;
  ${(props: ThemedProps) => {
    if (props.state === 'opened') {
      return css`animation: 500ms ease-out 0s forwards ${animations.slideIn};`;
    }
    return css`animation: 300ms ease-in 0s forwards ${animations.slideOut};`;
  }};

  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.sm}) {
    width: 100%;
  }

  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.md}) {
    width: 80%;
  }
`;
