import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    column?: {
        start: string;
        end: string;
    };
    row?: {
        start: string;
        end: string;
    };
    justify?: 'start' | 'end' | 'center' | 'stretch';
    align?: 'start' | 'end' | 'center' | 'stretch';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Cell: import("styled-components").StyledComponent<"div", any, import("../Block").BlockProps & Props, never>;
export default Cell;
