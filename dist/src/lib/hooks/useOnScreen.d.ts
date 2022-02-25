import React from 'react';
/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export declare const useOnScreen: <Element_1 extends HTMLElement>(offset?: number) => [Boolean, React.RefObject<Element_1>];
