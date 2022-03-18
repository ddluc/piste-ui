import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    direction: 'x' | 'y';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Scroll: import("styled-components").StyledComponent<(props: import("../Block").BlockProps) => JSX.Element, import("styled-components").DefaultTheme, Props, never>;
export default Scroll;
