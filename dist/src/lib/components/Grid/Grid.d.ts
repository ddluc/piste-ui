import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    columns?: string;
    rows?: string;
    areas?: string[];
    rowGap?: string;
    columnGap?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
export declare const formatAreas: (areas: string[]) => string;
export declare const Grid: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Block").BlockProps & Props, never>;
export default Grid;
