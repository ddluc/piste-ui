// styled.d.ts
import 'styled-components';
import { 
  ThemeFont,
  ThemePalette, 
  ThemeBorder, 
  ThemeSpacing, 
  ThemeBreakpoints,
  ThemeLevels
} from './types'; 

declare module 'styled-components' {

  interface Theme {
    name: string,
    id?: '__default' | undefined, 
    fonts: ThemeFont,
    palette: ThemePalette,
    border: ThemeBorder; 
    spacing: ThemeSpacing, 
    breakpoints: ThemeBreakpoints
    zIndex: ThemeLevels,
  }

}