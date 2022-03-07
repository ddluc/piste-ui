import { AnonymousFunction } from '../types';
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
 * Addds transparency to a color
 */
export declare const transparentize: (color: string, opacity: number) => string;
