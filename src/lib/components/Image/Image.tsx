import React from 'react'; 
import { Skeleton, SkeletonProps, isSkeleton } from '../Skeleton';
import { Fit } from '../Fit';
import { useOnScreen } from '../../hooks/useOnScreen';

import { PreviewImage } from './bin/PreviewImage';
import { MainImage } from './bin/MainImage';

export interface Props extends React.HTMLAttributes<HTMLImageElement>  {
  src: {
    main: string; 
    preview: string
  };  
  blur?: number; 
  height?: number;
  width?: number; 
  fit?: 'fill' | 'cover' | 'contain' | 'scale'; 
  xpos: number; 
  ypos: number
  backgroundColor?: string; 
} 

const Image = (props: Props | SkeletonProps): JSX.Element => { 

  if (isSkeleton(props)) { 
    return <Skeleton {...props} type='box' />
  }

  const { 
    height, 
    width, 
    src, 
    blur,
    backgroundColor,
    fit,
    xpos, 
    ypos,
    ...imageProps 
  } = props; 
  
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [isVisible, currentElement] = useOnScreen<HTMLDivElement>();

  const onImageLoad = React.useCallback(() => {
    setIsLoaded(true); 
  }, [setIsLoaded]); 

  return (
    <Fit
      ref={currentElement} 
      height={`${height}px`} 
      width={`${width}px`} 
      position='relative'
      fill={fit === 'fill'}
      contain={fit === 'contain'}
      cover={fit === 'cover'}
      scale={fit === 'scale'}
      align={`${xpos}% ${ypos}%`}
      background={{ color: backgroundColor ? backgroundColor : '#EDEDED' }}
    >
      { (isVisible || isLoaded) && (
        <MainImage 
          {...imageProps} 
          height="100%"
          width="100%"
          opacity={ isLoaded ? 1 : 0 }
          src={src.main} 
          onLoad={onImageLoad}
        />
      )}
      { blur ? (
        <PreviewImage 
          {...imageProps} 
          height="100%"
          width="100%"
          opacity={ isLoaded ? 0 : 1 }  
          blur={blur} 
          src={src.preview} 
        />
      ) : ''}
    </Fit>
  );
};

// Export the component as the default export 
export default Image; 
