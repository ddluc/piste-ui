import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Block: import("styled-components").StyledComponent<"div", any, Props, never>;
export default Block;
