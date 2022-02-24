/**
 * Typeguard to determine if props are skeleton props
 */

export interface BoxProps { 
  skeleton: true,
  type?: 'box'; 
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none'; 
  width?: number; 
  height?: number; 
  fluid?: boolean; 
  margin?: [number, number, number, number];
  primaryColor?: string; 
  secondaryColor?: string; 
  
}; 

export interface CircleProps { 
  skeleton: true,
  type?: 'circle'; 
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none'; 
  size?: number;   
  margin?: [number, number, number, number];
  primaryColor?: string; 
  secondaryColor?: string;  
}

export type SkeletonProps = BoxProps | CircleProps; 


export const isSkeleton = (props: any): props is SkeletonProps => {
  return 'skeleton' in props;
};

export const isBoxProps = (props: any): props is BoxProps => {
  return props.type === 'box'; 
};

export const isCircleProps = (props: any): props is CircleProps => {
  return props.type === 'circle'; 
};