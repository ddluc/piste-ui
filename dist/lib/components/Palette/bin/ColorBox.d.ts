import { Theme } from 'styled-components';
declare type ThemeColors = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'grey' | 'lightgrey' | 'neutral' | 'visualization';
declare type ColorBoxProps = {
    color: ThemeColors;
    shade?: number;
    border?: string;
};
export interface ThemedProps extends ColorBoxProps {
    theme: Theme;
}
export declare const getThemeColor: ({ color, shade, theme }: ThemedProps) => string;
export declare const ColorBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ColorBoxProps, never>;
export declare const BrandColorBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ColorBoxProps, never>;
export {};
