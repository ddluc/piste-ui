import React from 'react';
import { useTheme, Theme } from 'styled-components';
import Container from './bin/Container'; 
import WaveSkeleton from './bin/WaveSkeleton';
import ShimmerSkeleton from './bin/ShimmerSkeleton';
import DefaultSkeleton from './bin/DefaultSkeleton'; 
import PulseSkeleton from './bin/PulseSkeleton';

export interface BoxProps { 
  type: 'box'; 
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none'; 
  width?: number; 
  height?: number; 
  fluid?: boolean; 
  margin?: [number, number, number, number];
  primaryColor?: string; 
  secondaryColor?: string; 
  
}; 

export interface CircleProps { 
  type: 'circle'; 
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none'; 
  size?: number;   
  margin?: [number, number, number, number];
  primaryColor?: string; 
  secondaryColor?: string;  
}

export const isBoxProps = (props: any): props is BoxProps => {
  return props.type === 'box'; 
};

export const isCircleProps = (props: any): props is CircleProps => {
  return props.type === 'circle'; 
};

const Skeleton  = (props: BoxProps | CircleProps): JSX.Element => { 

  let height: number; 
  let width: number; 
  let size: number; 
  let fluid: boolean; 

  const { margin, type, primaryColor, secondaryColor }  = props; 

  if (isCircleProps(props)) {
    size = props.size;
  }

  if (isBoxProps(props)) { 
    height = props.height; 
    width = props.width; 
    fluid = props.fluid; 
  }
  
  const theme: Theme = useTheme(); 

  const colors: [string, string] = (primaryColor && secondaryColor) ? [primaryColor, secondaryColor] : theme.skeleton.colors; 

  const renderSkeleton = (): JSX.Element => { 
    const animation = props.animation ? props.animation : theme.skeleton.animation; 
    if (animation === 'shimmer') {
      return <ShimmerSkeleton colors={colors}/>
    }
    if (animation === 'pulse') { 
      return <PulseSkeleton colors={colors} />
    }
    if (animation === 'wave') { 
      return <WaveSkeleton colors={colors} />
    }
    return <DefaultSkeleton colors={colors} />; 
  } 

  return (
    <Container 
      height={ size ? size : height}
      width={ size ? size : width}
      fluid={fluid}
      margin={margin} 
      type={type}
    >
      { renderSkeleton() }
    </Container>
  );
  
}

export default Skeleton; 