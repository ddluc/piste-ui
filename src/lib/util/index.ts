import { AnonymousFunction } from '../types';

export const logBuild = (): void => {
  console.log('[piste-ui]: Render Build v0.0.1. See https://github.com/ddluc/piste-ui for for more information');
};

/**
 *
 * @param func the function to debouce
 * @param interval the interval to wait (in milliseconds)
 * @param leading
 * @returns
 */

export const debounce = (func: AnonymousFunction, interval = 200, leading = false) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]): any => {
    const context = this;
    const invoke = () => {
      timeout = null;
      if (!leading) func.apply(context, args);
    };
    if (leading && !timeout) func.apply(context, args);
    clearTimeout(timeout);
    timeout = setTimeout(invoke, interval);
  };
};

/**
 * Wraps a numeric digit and returns a pixel value
 * @param num
 * @returns string (in pixel unit)
 */
export const px = (num: number): string => `${num}px`;

/**
 * Addds transparency to a color
 */
export const transparentize = (color: string, opacity: number) => {
  if (!opacity) return color;
  return color + Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
    .toString(16)
    .toUpperCase();
};
