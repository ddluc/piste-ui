import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    fit: 'fill' | 'contain' | 'cover' | 'scale' | 'none';
    align: string;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Fit: import("styled-components").StyledComponent<(props: import("../Block").BlockProps) => JSX.Element, import("styled-components").DefaultTheme, Props, never>;
export default Fit;
