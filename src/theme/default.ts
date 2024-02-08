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
      xsmall: 12,
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
    success: {
      main: '#388e3c',
      contrastText: '#FFF',
      shades: ['#1F4F21', '#BEE8AE', '#C8E8CA'],
    },
    warning: {
      main: '#F5D734',
      contrastText: '#FFF',
      shades: ['#8D6320', '#FFE194', '#FFEEC6']
    },
    danger: {
      main: '#d45a5a',
      contrastText: '#FFF',
      shades: ['#6F2F2F', '#EB9593', '#FED3D1'],
    },
    body: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    grey: '#C4C4C4',
    lightgrey: '#EDEDED',
    neutral: ['#3E4242', '#69706F', '#A5B0AE', '#E1EFED', '#EDFCFA', '#C9D6D4'],
    visualization: ['#F7804A', '#D4CC3F', '#52EBAB', '#473FD4', '#75DA85', '#C0FBC8']
  },
  border: {
    radius: {
      sm: '4px',
      lg: '18px'
    },
    width: '1px'
  },
  breakpoints: {
    xs: '400px',
    sm: '720px',
    md: '960px',
    lg: '1200px',
    xl: '1300px'
  },
  spacing: generateThemeSpacing(4),
  zIndex: generateZIndices(),
  skeleton: {
    colors: ['#f9f9f9', '#f3f3f3'],
    animation: 'wave'
  },
  forms: {
    outline: '0px 0px 0px 2px',
  }
};
