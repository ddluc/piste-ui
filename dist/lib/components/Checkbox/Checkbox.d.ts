import React from 'react';
import { BaseSkeletonProps } from '../Skeleton';
export interface BaseProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    checked: boolean;
    touched?: boolean;
    error?: string;
    help?: string;
    disabled?: boolean;
}
interface SkeletonProps extends BaseSkeletonProps, BaseProps {
    skeleton?: boolean;
}
export declare type Props = BaseProps | SkeletonProps;
declare const Checkbox: (props: Props) => JSX.Element;
export default Checkbox;
