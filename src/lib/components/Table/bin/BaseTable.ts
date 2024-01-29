import styled, { Theme } from 'styled-components';

export type Props = {
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  scrollbar: {
    height?: number
    color?: string
    background?: string
    hover?: string
  }
  alternate: boolean
  even?: string
  odd?: string
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
      background-color: ${({ scrollbar, theme }) => scrollbar.color || theme.palette.neutral[2]};
      border-radius: ${({ theme }) => `${theme.border.radius}` || '4px'};
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ scrollbar, theme }) => scrollbar.hover || theme.palette.neutral[1]};
    }
  }
  // Header Spacing
  thead { 
    th { 
      padding: ${({ spacing }) => `${spacing * 2}px ${spacing}px`};
    }
  }
  // Body Colors & Spacing 
  tbody { 
    // Spacing
    td { 
      padding: ${({ spacing }) => `${spacing * 2}px ${spacing * 4}px ${spacing * 2}px ${spacing}px`};
    }
    /* tr:first-child td { 
      padding-top: ${({ spacing }) => `${spacing * 2 + 2}px`};
    } */
    // Alternating Rows 
    tr:nth-child(odd) {
      background-color: ${({ alternate, odd, theme }) => alternate && (odd || theme.palette.white)};
    }
    tr:nth-child(even) {
      background-color: ${({ alternate, even, theme }) => alternate && (even || theme.palette.lightgrey)};
    }
  }
  



`;
