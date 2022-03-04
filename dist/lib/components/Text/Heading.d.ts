import { Theme } from 'styled-components';
import { TextProperties } from './types';
interface Props extends TextProperties {
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const H1: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, Props, never>;
export declare const H2: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, Props, never>;
export declare const H3: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, Props, never>;
export declare const H4: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, Props, never>;
export declare const H5: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, Props, never>;
export declare const H6: import("styled-components").StyledComponent<"h6", import("styled-components").DefaultTheme, Props, never>;
export {};
