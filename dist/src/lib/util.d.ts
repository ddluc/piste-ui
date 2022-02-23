export declare const logBuild: () => void;
/**
 *
 * @param func the function to debouce
 * @param interval the interval to wait (in milliseconds)
 * @param leading
 * @returns
 */
export declare const debounce: (func: (...args: any[]) => any, interval?: number, leading?: boolean) => (...args: any[]) => any;
