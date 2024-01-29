import React from 'react';
import { BaseTable } from './bin';
import { PaletteIndex, PaletteOption } from '../../types';
import { Props as BaseTableProps } from './bin/BaseTable';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props extends BaseTableProps {
  children?: React.ReactNode
}

// Declare the component
const Table = (props: Props): JSX.Element => {
  const {
    children,
    spacing = 4,
    alternate = true,
    even,
    odd,
    scrollbar = { height: 5 }
  } = props;
  return (
    <BaseTable
      spacing={spacing}
      scrollbar={scrollbar}
      alternate={alternate}
      even={even}
      odd={odd}
    >
      {children}
    </BaseTable>
  );
};

// Export the component as the default export
export default Table;
