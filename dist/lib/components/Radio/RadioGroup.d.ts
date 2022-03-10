import React from 'react';
import { BaseSkeletonProps } from '../Skeleton';
export interface BaseProps {
    legend: string;
    name: string;
    touched?: boolean;
    error?: string;
    help?: string;
    disabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    border?: boolean;
    onChange?: (e: any) => void;
    children: React.ReactNode;
}
interface SkeletonProps extends BaseSkeletonProps, BaseProps {
    skeleton?: boolean;
}
export declare type Props = SkeletonProps | BaseProps;
declare const RadioGroup: (props: Props) => JSX.Element;
export default RadioGroup;
