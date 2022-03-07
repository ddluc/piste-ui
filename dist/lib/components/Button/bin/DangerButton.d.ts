export interface Props {
    fluid?: boolean;
    variation?: 'default' | 'secondary' | 'minimal';
    iconPosition?: 'left' | 'right';
}
export declare const DangerButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("./DefaultButton").Props & Props, never>;
