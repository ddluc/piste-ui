import React from 'react';
import { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
export interface Props extends BaseCSSProperties {
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement>;
}
export interface ThemedProps extends Props {
    theme: Theme;
}
declare const Block: (props: Props) => JSX.Element;
export default Block;
