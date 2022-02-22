import { ThemeSpacing, ThemeLevels} from "./types";

/**
 * Generates the theme spacing from a root unit
 * @param root the root space unit (in pixels)
 */
export const generateThemeSpacing = (root: number = 4) => { 
  return [...Array(16)].map((_, i) => `${root * i + 1}px`) as ThemeSpacing;  
}; 


/**
 * Generates the theme z-indices
 */
export const generateZIndices = () => { 
  return [...Array(16)].map((_, i) => i + 1) as ThemeLevels;  
}