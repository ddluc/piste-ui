import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    fit: 'fill' | 'contain' | 'cover' | 'scale' | 'none';
    align: string;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Fit: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Block").BlockProps & Props, never>;
export default Fit;
