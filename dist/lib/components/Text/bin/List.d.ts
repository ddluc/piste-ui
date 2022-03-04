import { Theme } from 'styled-components';
import { TextProperties } from '../types';
export interface Props extends TextProperties {
    style?: string;
    indent?: string;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const UnorderedList: import("styled-components").StyledComponent<"ol", import("styled-components").DefaultTheme, Props, never>;
export declare const OrderedList: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, Props, never>;
export declare const ListItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, Props, never>;
