export interface Props {
    type: 'circle' | 'box';
    width: number;
    height: number;
    fluid: boolean;
    margin?: [number, number, number, number];
}
declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export default Container;
