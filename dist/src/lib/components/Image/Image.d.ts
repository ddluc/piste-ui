import React from 'react';
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
declare const Image: (props: Props) => JSX.Element;
export default Image;
