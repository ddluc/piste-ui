import { Theme } from 'styled-components';
declare type ContainerProps = {
    height: number;
    width: number;
};
export interface ThemedProps extends ContainerProps {
    theme: Theme;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerProps, never>;
export {};
