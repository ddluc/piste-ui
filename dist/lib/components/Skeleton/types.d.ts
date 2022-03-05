/**
 * Typeguard to determine if props are skeleton props
 */
export interface BaseSkeletonProps {
    skeleton?: true;
}
export interface BoxProps extends BaseSkeletonProps {
    type?: 'box';
    animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
    width?: number;
    height?: number;
    fluid?: boolean;
    margin?: [number, number, number, number];
    primaryColor?: string;
    secondaryColor?: string;
}
export interface CircleProps extends BaseSkeletonProps {
    type?: 'circle';
    animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
    size?: number;
    margin?: [number, number, number, number];
    primaryColor?: string;
    secondaryColor?: string;
}
export declare const isSkeleton: (props: any) => props is BaseSkeletonProps;
export declare const isBoxProps: (props: any) => props is BoxProps;
export declare const isCircleProps: (props: any) => props is CircleProps;
