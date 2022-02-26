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
