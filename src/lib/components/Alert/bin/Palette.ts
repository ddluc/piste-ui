import { Theme } from 'styled-components';

export type AlertPaletteItem = {
  background: string,
  text: string,
  border: string
  icon: string
}

export type AlertPalette = {
  [key: string]: AlertPaletteItem
}

export const getAlertPalette = (theme: Theme): AlertPalette => ({
  primary: {
    background: theme.palette.white,
    text: theme.palette.primary.shades[1],
    border: theme.palette.primary.main,
    icon: theme.palette.primary.main,
  },
  accent: {
    background: theme.palette.white,
    text: theme.palette.accent.shades[1],
    border: theme.palette.accent.main,
    icon: theme.palette.accent.main,
  },
  success: {
    background: theme.palette.white,
    text: theme.palette.success.shades[0],
    border: theme.palette.success.main,
    icon: theme.palette.success.main,
  },
  warning: {
    background: theme.palette.white,
    text: theme.palette.warning.shades[0],
    border: theme.palette.warning.main,
    icon: theme.palette.warning.main,
  },
  danger: {
    background: theme.palette.white,
    text: theme.palette.danger.shades[0],
    border: theme.palette.danger.main,
    icon: theme.palette.danger.main,
  },
  grey: {
    background: theme.palette.lightgrey,
    text: theme.palette.neutral[1],
    border: theme.palette.grey,
    icon: theme.palette.neutral[1],
  },
  white: {
    background: theme.palette.white,
    text: theme.palette.black,
    border: theme.palette.black,
    icon: theme.palette.black,
  },
  black: {
    background: theme.palette.black,
    text: theme.palette.white,
    border: theme.palette.black,
    icon: theme.palette.white,
  },
  neutral: {
    background: theme.palette.neutral[3],
    text: theme.palette.neutral[1],
    border: theme.palette.neutral[2],
    icon: theme.palette.neutral[1],
  },
  vis1: {
    background: theme.palette.visualization[0],
    text: theme.palette.white,
    border: theme.palette.visualization[0],
    icon: theme.palette.white,
  },
  vis2: {
    background: theme.palette.visualization[1],
    text: theme.palette.white,
    border: theme.palette.visualization[1],
    icon: theme.palette.white,
  },
  vis3: {
    background: theme.palette.visualization[2],
    text: theme.palette.white,
    border: theme.palette.visualization[2],
    icon: theme.palette.white,
  },
  vis4: {
    background: theme.palette.visualization[3],
    text: theme.palette.white,
    border: theme.palette.visualization[3],
    icon: theme.palette.white,
  },
  vis5: {
    background: theme.palette.visualization[4],
    text: theme.palette.white,
    border: theme.palette.visualization[4],
    icon: theme.palette.white,
  },
  vis6: {
    background: theme.palette.visualization[5],
    text: theme.palette.white,
    border: theme.palette.visualization[5],
    icon: theme.palette.white,
  }
});
