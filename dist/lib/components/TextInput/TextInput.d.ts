import React from 'react';
import { BaseSkeletonProps } from '../Skeleton';
interface BaseProps {
    name: string;
    label: string;
    value: string;
    placeholder?: string;
    hideLabel?: boolean;
    animated?: boolean;
    error?: string;
    help?: string;
    type?: 'text' | 'email' | 'tel' | 'password';
    touched?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
interface SkeletonProps extends BaseSkeletonProps, BaseProps {
    skeleton?: boolean;
}
export declare type Props = BaseProps | SkeletonProps;
declare const TextInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
