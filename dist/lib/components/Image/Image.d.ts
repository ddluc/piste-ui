import React from 'react';
import { BaseSkeletonProps } from '../Skeleton';
interface BaseProps extends React.HTMLAttributes<HTMLImageElement> {
    src: {
        main: string;
        preview?: string;
    };
    height: number;
    width: number;
    blur?: number;
    fit?: 'fill' | 'cover' | 'contain' | 'scale';
    xpos: number;
    ypos: number;
    backgroundColor?: string;
}
interface SkeletonProps extends BaseSkeletonProps {
    height: number;
    width: number;
}
export declare type Props = BaseProps | SkeletonProps;
declare const Image: (props: Props) => JSX.Element;
export default Image;
