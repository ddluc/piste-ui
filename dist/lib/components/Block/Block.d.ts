import { Theme } from 'styled-components';
declare type BackgroundCSSProperty = {
    color: string;
    position: string;
    image?: string;
    repeat?: string;
    attachment?: 'scroll' | 'fixed' | 'local' | 'initial' | 'inherit';
    size?: string;
    clip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
};
declare type PaddingCSSProperty = [string, string, string, string];
declare type MarginCSSProperty = [string, string, string, string];
declare type PositionCSSProperty = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
declare type OverflowCSSProperty = 'visible' | 'hidden' | 'scroll' | 'auto';
declare type TextAlignCSSProperty = 'right' | 'center' | 'left';
declare type CSSFLoatProperty = 'left' | 'right' | 'none';
declare type Props = {
    display?: 'block' | 'inline-block';
    height?: string;
    width?: string;
    float?: CSSFLoatProperty;
    margin?: MarginCSSProperty;
    padding?: PaddingCSSProperty;
    border?: string;
    opacity?: number;
    background?: BackgroundCSSProperty;
    outline?: string;
    position?: PositionCSSProperty;
    zIndex: string;
    left?: string;
    right?: string;
    overflow: OverflowCSSProperty;
    textAlign: TextAlignCSSProperty;
};
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Block: import("styled-components").StyledComponent<"div", any, Props, never>;
export default Block;
