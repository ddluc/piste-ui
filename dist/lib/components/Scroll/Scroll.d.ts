import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    direction: 'x' | 'y';
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Scroll: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Block").BlockProps & Props, never>;
export default Scroll;
