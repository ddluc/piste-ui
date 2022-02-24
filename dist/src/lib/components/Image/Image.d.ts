import React from 'react';
import { SkeletonProps } from '../Skeleton';
export interface Props extends React.HTMLAttributes<HTMLImageElement> {
    src: {
        main: string;
        preview: string;
    };
    blur?: number;
    height?: number;
    width?: number;
    fit?: 'fill' | 'cover' | 'contain' | 'scale';
    xpos: number;
    ypos: number;
    backgroundColor?: string;
}
declare const Image: (props: Props | SkeletonProps) => JSX.Element;
export default Image;
