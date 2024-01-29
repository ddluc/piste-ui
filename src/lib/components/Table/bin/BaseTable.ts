import styled, { Theme } from 'styled-components';
import { PaletteOption } from '../../../types';

type Props = {
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  scrollbar: {
    height?: number
    color?: PaletteOption
    background?: PaletteOption
    hover?: PaletteOption
  }
}

export const BaseTable = styled.table<Props>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family.display};
  border-collapse: collapse;
  // Responsive Scrolling
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
      height: ${({ scrollbar }) => `${scrollbar.height}px` || '5px'};
      background-color: ${({ scrollbar, theme }) => scrollbar.background || theme.palette.neutral[3]};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ scrollbar, theme }) => scrollbar.background || theme.palette.neutral[2]};
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ scrollbar, theme }) => scrollbar.background || theme.palette.neutral[1]};
    }
  }
  // Header Spacing
  thead { 
    th { 
      padding: ${({ spacing }) => `${spacing * 2}px 0px`};
    }
  }
  // Body Spacing 
  tbody { 
    // Separates the top row from the table header 
    tr:first-child td { 
      padding-top: 20px;
      padding-top: ${({ spacing }) => `${spacing * 4}px`};
    }
    td { 
      padding: ${({ spacing }) => `${spacing * 2}px ${spacing * 4}px ${spacing * 2}px 0px`};
    }
  }
`;
