import React from 'react';
export interface Props {
    name: string;
    label: string;
    placeholder?: string;
    hideLabel?: boolean;
    animated?: boolean;
    error?: string;
    value?: string;
    type?: 'text' | 'email' | 'tel' | 'password';
    touched?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare const TextInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
