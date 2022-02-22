import { Theme } from 'styled-components';
declare type ThemeColors = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'grey' | 'lightgrey' | 'visualization';
declare type ColorBoxProps = {
    color: ThemeColors;
    shade?: number;
};
export interface ThemedProps extends ColorBoxProps {
    theme: Theme;
}
export declare const ColorBox: import("styled-components").StyledComponent<"div", any, ColorBoxProps, never>;
export {};
