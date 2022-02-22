import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flexFlow?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline';
    gap: string;
    flex?: string;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number;
    order?: number;
    alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Flex: import("styled-components").StyledComponent<"div", any, import("../Block").BlockProps & Props, never>;
export default Flex;
