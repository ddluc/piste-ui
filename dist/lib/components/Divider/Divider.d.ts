export interface Props {
    color?: string;
    size?: 1 | 2 | 3 | 4 | 5;
    width?: string;
    height?: string;
    spacing?: {
        top?: string;
        bottom?: string;
        right?: string;
        left?: string;
    };
    alignment?: 'right' | 'center' | 'left';
    dashed?: boolean;
    solid?: boolean;
    type?: 'horizontal' | 'vertical';
}
declare const Divider: import("styled-components").StyledComponent<"hr", import("styled-components").DefaultTheme, Props, never>;
export default Divider;
