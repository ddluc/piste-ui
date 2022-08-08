/**
 *
 * Re-usable and utility types
 * ==================================================================
 */

import React from 'react';

/**
 * Define base CSS property types
 */
 type BackgroundCSSProperty = {
  color?: string | 'transparent' | 'initial' | 'inherit';
  position?: string;
  image?: 'url' | 'none' | 'initial' | 'inherit';
  repeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit'
  attachment?: 'scroll' | 'fixed' | 'local' | 'initial' | 'inherit';
  size?: 'auto' | 'length' | 'cover' | 'contain' | 'initial' | 'inherit';
  origin?: 'padding-box' | 'border-box' | 'content-box' | 'initial' | 'inherit';
  clip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';

};

export type PaddingCSSProperty = [string, string, string, string];
export type MarginCSSProperty = [string, string, string, string];
export type PositionCSSProperty = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
export type OverflowCSSProperty = 'visible' | 'hidden' | 'scroll' | 'auto';
export type TextAlignCSSProperty = 'right' | 'center' | 'left';
export type CSSFLoatProperty = 'left' | 'right' | 'none';

export type BaseCSSProperties = {
  display?: 'block' | 'inline-block' | 'flex' | 'grid';
  height?: string;
  width?: string;
  float?: CSSFLoatProperty;
  margin?: MarginCSSProperty;
  padding?: PaddingCSSProperty;
  border?: string;
  opacity?: number;
  background?: BackgroundCSSProperty;
  outline?: string;
  position?: PositionCSSProperty;
  zIndex?: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  overflow?: OverflowCSSProperty;
  textAlign?: TextAlignCSSProperty;
};

export type AnonymousFunction = (...args: any[]) => any;

export type PaletteOption =
'primary'
| 'accent'
| 'success'
| 'warning'
| 'danger'
| 'neutral'
| 'black'
| 'grey'
| 'white'
| 'vis1'
| 'vis2'
| 'vis3'
| 'vis4'
| 'vis5'
| 'vis6';

export type AlertData = {
  id: string,
  title: string
  content: string
  duration?: number
  type?: PaletteOption
  icon?: React.ReactNode
};
