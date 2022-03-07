// theme.ts
import { Theme } from 'styled-components';
import { generateThemeSpacing, generateZIndices } from './utils';

export const DEFAULT_THEME: Theme = {
  name: 'Default',
  fonts: {
    family: {
      display: 'IBM Plex Mono',
      body: 'IBM Plex Sans',
      mono: 'IBM Plex Mono'
    },
    weight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700
    },
    size: {
      small: 14,
      normal: 16,
      large: 20,
      subtitle: 24,
      title: 36
    }
  },
  palette: {
    primary: {
      main: '#42AD09',
      contrastText: '#FFFFFF',
      shades: ['#052E10', '#185C2A', '#4FAD6A', '#85DA9A', '#C3F9CD']
    },
    accent: {
      main: '#3FD4C0',
      contrastText: '#FFFFFF',
      shades: ['#052E29', '#275C58', '#3FD4C0', '#80D9D7', '#B7EFFA']
    },
    success: '#84DB6B',
    warning: '#F0DA72',
    danger: '#DB7B71',
    white: '#FFFFFF',
    black: '#000000',
    grey: '#C4C4C4',
    lightgrey: '#EDEDED',
    neutral: ['#3E4242', '#69706F', '#A5B0AE', '#E1EFED', '#EDFCFA', '#C9D6D4'],
    visualization: ['#F7804A', '#D4CC3F', '#52EBAB', '#473FD4', '#75DA85', '#C0FBC8']
  },
  border: {
    radius: '3px',
    width: '1px'
  },
  breakpoints: {
    xs: '400px',
    sm: '720px',
    md: '960px',
    lg: '1200px'
  },
  spacing: generateThemeSpacing(4),
  skeleton: {
    colors: ['#f9f9f9', '#f3f3f3'],
    animation: 'wave'
  },
  zIndex: generateZIndices(),
};
