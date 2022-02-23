import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    fill?: boolean;
    contain?: boolean;
    cover?: boolean;
    scale?: boolean;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Fit: import("styled-components").StyledComponent<"div", any, import("../Block").BlockProps & Props, never>;
export default Fit;
