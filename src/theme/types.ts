
export type ThemeFont = { 
  family: { 
    display: string, 
    body: string, 
    mono: string, 
  }; 
  weight: { 
    light: number
    normal: number
    semibold: number
    bold: number
  }
}; 

export type Color = string; 

export type ThemeColor = { 
  main: string; 
  contrastText: string; 
  shades?: Color[]
}; 

export type ThemePalette = { 
  primary: ThemeColor; 
  accent: ThemeColor; 
  success: Color;  
  warning: Color; 
  danger: Color; 
  white: Color; 
  black: Color; 
  grey: Color; 
  lightgrey: Color; 
  visualization?: [Color, Color, Color, Color, Color, Color]
}; 

export type ThemeBreakpoints = { 
  lg: string; 
  md: string; 
  sm: string; 
  xs: string; 
}

export type ThemeBorder = { 
  radius: string; 
  width: string; 
}; 

export type ThemeElevation  = [string, string, string, string]; 

export type ThemeSpacing = [
  string, string, string, string, string, string, string, string, 
  string, string, string, string, string, string, string, string 
];

export type ThemeLevels = [number, number, number, number, number, number, number, number, number, number ]; 

export interface Theme {
  id?: '__default' | undefined, 
  fonts: ThemeFont,
  palette: ThemePalette,
  border: ThemeBorder; 
  spacing: ThemeSpacing, 
  breakpoints: ThemeBreakpoints
  zIndex: ThemeLevels,
}