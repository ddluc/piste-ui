import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    row?: boolean;
    column?: boolean;
    reverse?: boolean;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flow?: string;
    center?: boolean;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline';
    gap?: string;
    flex?: string;
    grow?: number | 'auto' | 'initial' | 'inherit';
    shrink?: number | 'auto' | 'initial' | 'inherit';
    basis?: number | 'auto' | 'initial' | 'inherit';
    order?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Flex: import("styled-components").StyledComponent<(props: import("../Block").BlockProps) => JSX.Element, import("styled-components").DefaultTheme, Props, never>;
export default Flex;
