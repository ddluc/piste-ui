import React from 'react';
import { BaseTable } from './bin';
import { Props as BaseTableProps } from './bin/BaseTable';
import { Nullable } from '../../types';

import { TableDataColumn, TableDataRow, RowId } from './types';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props<T = {}> extends BaseTableProps {
  rows: TableDataRow<T>[]
  columns: TableDataColumn[],
  children: (args: {
    // Data Props
    rows?: TableDataRow<T>[];
    columns?: TableDataColumn[]
    // Sort Props
    sortDirection: string;
    sortColumn: Nullable<string>
    onSortColumn: (column: String) => void;
  }) => React.ReactNode;
}

// Declare the component
const Table = (props: Props): JSX.Element => {
  const {
    rows,
    columns,
    children,
    spacing = 4,
    alternate = true,
    even,
    odd,
    scrollbar = { height: 5 }
  } = props;

  // Table State
  const [preparedRows, setPreparedRows] = React.useState<TableDataRow[]>([]);
  const [sortDirection, setSortDirection] = React.useState<string>('asc');
  const [sortColumn, setSortColumn] = React.useState<Nullable<string>>(null);

  // Reset the table rows when the provided data changes
  React.useEffect(() => {
    setPreparedRows(rows);
  }, [rows]);

  const reverse = () => {
    if (sortDirection === 'asc') return 'desc';
    return 'asc';
  };

  // Handle sort state
  const onSortColumn = (column: string) => {
    if (column === sortColumn) {
      const direction = reverse();
      setSortDirection(direction);
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Sort rows
  React.useEffect(() => {
    if (!sortColumn) return;
    const sortedRows = [...rows].sort((a: TableDataRow<{ any: any}>, b: TableDataRow) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'desc' ? -1 : 1;
      return 0;
    });
    setPreparedRows(sortedRows);
  }, [sortColumn, sortDirection, rows]);

  return (
    <BaseTable
      spacing={spacing}
      scrollbar={scrollbar}
      alternate={alternate}
      even={even}
      odd={odd}
    >
      {children({
        rows: preparedRows,
        columns,
        sortColumn,
        sortDirection,
        onSortColumn
      })}
    </BaseTable>
  );
};

// Export the component as the default export
export default Table;
