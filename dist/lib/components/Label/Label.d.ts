import React from 'react';
export interface Props {
    value: string;
    htmlFor: string;
    children?: React.ReactNode;
    error?: boolean;
    disabled?: boolean;
    isActive?: boolean;
    hideLabel?: boolean;
    animated?: boolean;
    isFocused?: boolean;
    position?: {
        x: number;
        y: number;
    };
    transpose?: {
        x: number;
        y: number;
    };
    scale?: number;
}
declare const Label: (props: Props) => JSX.Element;
export default Label;
