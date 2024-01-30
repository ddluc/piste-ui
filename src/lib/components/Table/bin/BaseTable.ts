/* eslint-disable indent */
import styled, { Theme } from 'styled-components';

export type Props = {
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gridlines?: boolean
  scrollbar: {
    height?: number
    color?: string
    background?: string
    hover?: string
  }
  alternate: boolean
  gridColor?: string
  headerColor?: string;
  even?: string
  odd?: string
}

export const BaseTable = styled.table<Props>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family.display};
  border-collapse: ${({ gridlines }) => (gridlines ? 'separate' : 'collapse')};
  border-radius: ${({ theme }) => `${theme.border.radius}`};
  background-color: ${({ gridlines, gridColor }) => ((gridlines && gridColor) ? gridColor : 'transparent')};
  // Responsive Scrolling
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    // Custom scrollbar styles
    &::-webkit-scrollbar {
      height: ${({ scrollbar }) => `${scrollbar.height}px`};
      background-color: ${({ scrollbar, theme }) => scrollbar.background || theme.palette.neutral[3]};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ scrollbar, theme }) => scrollbar.color || theme.palette.neutral[2]};
      border-radius: ${({ theme }) => `${theme.border.radius}`};
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ scrollbar, theme }) => scrollbar.hover || theme.palette.neutral[1]};
    }
  }
  // Header Spacing
  thead { 
    th { 
      padding: ${({ spacing, theme }) => theme.spacing[spacing]};
      background-color: ${({ headerColor, theme }) => (headerColor || theme.palette.white)};
    }
  }
  // Body Colors & Spacing 
  tbody { 
    // Spacing
    td { 
      padding: ${({ spacing, theme }) => theme.spacing[spacing]};
    }
    tr { 
      background-color: ${({ alternate, theme }) => (!alternate ? theme.palette.white : 'none')};
    }
    // Alternating Rows 
    tr:nth-child(odd) {
      background-color: ${({ alternate, odd, theme }) => alternate && (odd || theme.palette.white)};
    }
    tr:nth-child(even) {
      background-color: ${({ alternate, even, theme }) => alternate && (even || theme.palette.lightgrey)};
    }
  }
  



`;
