import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    column?: {
        start: number | string;
        end: number | string;
    };
    row?: {
        start: number | string;
        end: number | string;
    };
    justify?: 'start' | 'end' | 'center' | 'stretch';
    align?: 'start' | 'end' | 'center' | 'stretch';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Cell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Block").BlockProps & Props, never>;
export default Cell;
