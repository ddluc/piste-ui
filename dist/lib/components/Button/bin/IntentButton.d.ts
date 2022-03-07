export interface Props {
    intent: 'success' | 'danger' | 'warning';
    variation: 'default' | 'secondary' | 'minimal';
    fluid?: boolean;
    iconPosition?: 'left' | 'right';
}
export declare const IntentButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("./DefaultButton").Props & Props, never>;
