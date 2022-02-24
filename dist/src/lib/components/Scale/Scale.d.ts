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
declare const Scale: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Block").BlockProps & Props, never>;
export default Scale;
