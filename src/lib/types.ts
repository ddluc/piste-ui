/**
 *
 * Re-usable and utility types
 * ==================================================================
 */

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

// eslint-disable-next-line no-unused-vars
export type AnonymousFunction = (...args: any[]) => any;
