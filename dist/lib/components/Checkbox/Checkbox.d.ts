import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    checked: boolean;
    touched?: boolean;
    error?: string;
    disabled?: boolean;
}
declare const Checkbox: (props: Props) => JSX.Element;
export default Checkbox;
