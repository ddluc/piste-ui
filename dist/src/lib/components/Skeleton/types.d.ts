/**
 * Typeguard to determine if props are skeleton props
 */
export interface BoxProps {
    skeleton: true;
    type?: 'box';
    animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
    width?: number;
    height?: number;
    fluid?: boolean;
    margin?: [number, number, number, number];
    primaryColor?: string;
    secondaryColor?: string;
}
export interface CircleProps {
    skeleton: true;
    type?: 'circle';
    animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
    size?: number;
    margin?: [number, number, number, number];
    primaryColor?: string;
    secondaryColor?: string;
}
export declare type SkeletonProps = BoxProps | CircleProps;
export declare const isSkeleton: (props: any) => props is SkeletonProps;
export declare const isBoxProps: (props: any) => props is BoxProps;
export declare const isCircleProps: (props: any) => props is CircleProps;
