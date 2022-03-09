import { AnonymousFunction } from '../types';
import { Theme } from '../../theme/types';
export declare const logBuild: () => void;
/**
 *
 * @param func the function to debouce
 * @param interval the interval to wait (in milliseconds)
 * @param leading
 * @returns
 */
export declare const debounce: (func: AnonymousFunction, interval?: number, leading?: boolean) => (...args: any[]) => any;
/**
 * Wraps a numeric digit and returns a pixel value
 * @param num
 * @returns string (in pixel unit)
 */
export declare const px: (num: number) => string;
/**
 * Wraps a numeric digit and returns a percent value
 * @param num
 * @returns string (in percent unit)
 */
export declare const pcnt: (num: number) => string;
/**
 * Addds transparency to a color
 */
export declare const transparentize: (color: string, opacity: number) => string;
/**
 * Genereate a box shadow for form elements
 */
export declare const getOutline: (error: boolean, theme: Theme, shade?: number, dangerOpacity?: number) => string;
