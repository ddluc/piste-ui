import { Theme } from 'styled-components';
declare type ContainerProps = {
    height: number;
    width: number;
};
export interface ThemedProps extends ContainerProps {
    theme: Theme;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
export {};
