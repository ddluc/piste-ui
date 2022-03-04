import { Theme } from 'styled-components';
import { TextProperties } from './types';
interface Props extends TextProperties {
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const Body: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, Props, never>;
export {};
