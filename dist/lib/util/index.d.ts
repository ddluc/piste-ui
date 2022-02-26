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
