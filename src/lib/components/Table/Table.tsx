import React from 'react';
import { BaseTable } from './bin';
import { PaletteOption } from '../../types';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props {
  children: React.ReactNode,
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  scrollbar?: {
    height: number
    color: PaletteOption
    background: PaletteOption
    hover: PaletteOption
  }
}

// Declare the component
const Table = (props: Props): JSX.Element => {
  const {
    children,
    spacing = 4,
    scrollbar = { height: 5 }
  } = props;
  return (<BaseTable spacing={spacing} scrollbar={scrollbar}>{children}</BaseTable>);
};

// Export the component as the default export
export default Table;
