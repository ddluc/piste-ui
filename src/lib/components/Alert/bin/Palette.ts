import styled, { Theme } from 'styled-components';
import { transparentize } from '../../../util';

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
    background: transparentize(theme.palette.success, 0.1),
    text: theme.palette.success,
    border: theme.palette.success,
    icon: theme.palette.success,
  },
  warning: {
    background: transparentize(theme.palette.warning, 0.1),
    text: theme.palette.warning,
    border: theme.palette.warning,
    icon: theme.palette.warning,
  },
  danger: {
    background: transparentize(theme.palette.danger, 0.1),
    text: theme.palette.danger,
    border: theme.palette.danger,
    icon: theme.palette.danger,
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
