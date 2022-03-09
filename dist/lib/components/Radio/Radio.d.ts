import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    name?: string;
    enabled?: boolean;
    touched?: boolean;
    error?: string;
    disabled?: boolean;
}
declare const Radio: (props: Props) => JSX.Element;
export default Radio;
