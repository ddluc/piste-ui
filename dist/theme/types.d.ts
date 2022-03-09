export declare type ThemeFont = {
    family: {
        display: string;
        body: string;
        mono: string;
    };
    weight: {
        light: number;
        normal: number;
        semibold: number;
        bold: number;
    };
    size: {
        small: number;
        normal: number;
        large: number;
        subtitle: number;
        title: number;
    };
};
export declare type Color = string;
export declare type ThemeColor = {
    main: string;
    contrastText: string;
    shades?: Color[];
};
export declare type ThemePalette = {
    primary: ThemeColor;
    accent: ThemeColor;
    success: Color;
    warning: Color;
    danger: Color;
    body: Color;
    white: Color;
    black: Color;
    grey: Color;
    lightgrey: Color;
    neutral?: [Color, Color, Color, Color, Color, Color];
    visualization?: [Color, Color, Color, Color, Color, Color];
};
export declare type ThemeBreakpoints = {
    lg: string;
    md: string;
    sm: string;
    xs: string;
};
export declare type ThemeBorder = {
    radius: string;
    width: string;
};
export declare type ThemeElevation = [string, string, string, string];
export declare type ThemeSpacing = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];
export declare type ThemeLevels = [number, number, number, number, number, number, number, number, number, number];
export declare type ThemeSkeleton = {
    colors: [string, string];
    animation: 'wave' | 'pulse' | 'none';
};
export declare type ThemeForm = {
    outline: string;
};
export interface Theme {
    name: string;
    id?: string;
    fonts: ThemeFont;
    palette: ThemePalette;
    border: ThemeBorder;
    spacing: ThemeSpacing;
    breakpoints: ThemeBreakpoints;
    zIndex: ThemeLevels;
    skeleton: ThemeSkeleton;
    forms: ThemeForm;
}
