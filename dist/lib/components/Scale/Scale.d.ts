import { Theme } from 'styled-components';
export interface Props {
    lg: string;
    md: string;
    sm: string;
    xs: string;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Scale: import("styled-components").StyledComponent<(props: import("../Block").BlockProps) => JSX.Element, import("styled-components").DefaultTheme, Props, never>;
export default Scale;
