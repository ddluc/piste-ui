import React from 'react';
import { BaseSkeletonProps } from '../Skeleton';
interface BaseProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    name?: string;
    enabled?: boolean;
    touched?: boolean;
    error?: string;
    disabled?: boolean;
}
interface SkeletonProps extends BaseSkeletonProps, BaseProps {
    skeleton?: boolean;
}
export declare type Props = BaseProps | SkeletonProps;
declare const Radio: (props: Props) => JSX.Element;
export default Radio;
