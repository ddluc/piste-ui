import React from 'react';
export interface Props {
    legend: string;
    name: string;
    touched?: boolean;
    error?: string;
    disabled?: boolean;
    onChange?: (e: any) => void;
    children: React.ReactNode;
}
declare const RadioGroup: (props: Props) => JSX.Element;
export default RadioGroup;
