interface Props {
    position: {
        x: number;
        y: number;
    };
    transpose?: {
        x: number;
        y: number;
    };
    scale: number;
    error?: boolean;
    disabled?: boolean;
    hideLabel?: boolean;
    isActive?: boolean;
    isFocused?: boolean;
}
declare const AnimatedLabelText: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, Props, never>;
export default AnimatedLabelText;
