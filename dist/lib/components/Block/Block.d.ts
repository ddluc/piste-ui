import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Block: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export default Block;
