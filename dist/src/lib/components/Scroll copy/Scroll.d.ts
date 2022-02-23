import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    x: boolean;
    y: boolean;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Scroll: import("styled-components").StyledComponent<"div", any, import("../Block").BlockProps & Props, never>;
export default Scroll;
