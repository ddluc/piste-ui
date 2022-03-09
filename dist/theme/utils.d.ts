import { ThemeSpacing, ThemeLevels } from './types';
/**
 * Generates the theme spacing from a root unit
 * @param root the root space unit (in pixels)
 */
export declare const generateThemeSpacing: (root?: number) => ThemeSpacing;
/**
* Generates the theme z-indices
*/
export declare const generateZIndices: () => ThemeLevels;
