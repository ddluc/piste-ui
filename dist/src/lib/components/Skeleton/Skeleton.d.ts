export interface BoxProps {
    type: 'box';
    animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
    width?: number;
    height?: number;
    fluid?: boolean;
    margin?: [number, number, number, number];
    primaryColor?: string;
    secondaryColor?: string;
}
export interface CircleProps {
    type: 'circle';
    animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
    size?: number;
    margin?: [number, number, number, number];
    primaryColor?: string;
    secondaryColor?: string;
}
export declare const isBoxProps: (props: any) => props is BoxProps;
export declare const isCircleProps: (props: any) => props is CircleProps;
declare const Skeleton: (props: BoxProps | CircleProps) => JSX.Element;
export default Skeleton;
