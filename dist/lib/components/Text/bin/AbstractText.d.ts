import { Theme } from 'styled-components';
import { TextProperties } from '../types';
export interface Props extends TextProperties {
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const AbstractTextStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Props, import("styled-components").DefaultTheme>>;
