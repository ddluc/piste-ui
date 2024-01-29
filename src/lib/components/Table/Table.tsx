import React from 'react';
import { BaseTable } from './bin';
import { Props as BaseTableProps } from './bin/BaseTable';
import { Nullable } from '../../types';

type RowId = number | string;

export type TableDataRow<T = {}> = T & {
  id: RowId
  [key: string]: any
}

export type TableDataColumn = {
  key: string;
  header: string;
  sortable?: boolean;
  width: number
}

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props<T = {}> extends BaseTableProps {
  rows: TableDataRow<T>[]
  columns: TableDataColumn[],
  selectable: boolean,
  children: (args: {
    // Data Props
    rows?: TableDataRow<T>[];
    columns?: TableDataColumn[]
    // Select Props
    selectable: boolean,
    isSelected?: (id: RowId) => boolean;
    isBulkSelected?: () => boolean;
    onRowSelected?: (id: RowId) => void;
    onBulkSelect?: (isSelected: boolean) => void;
    selectedRows?: Set<RowId>;
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
    selectable = false,
    spacing = 4,
    alternate = true,
    even,
    odd,
    scrollbar = { height: 5 }
  } = props;

  // Table State
  const [preparedRows, setPreparedRows] = React.useState<TableDataRow[]>([]);
  const [selectedRows, setSelectedRows] = React.useState<Set<RowId>>(new Set());
  const [bulkSelected, setBulkSelected] = React.useState<boolean>(false);
  const [sortDirection, setSortDirection] = React.useState<string>('asc');
  const [sortColumn, setSortColumn] = React.useState<Nullable<string>>(null);

  // Reset the table rows when the provided data changes
  React.useEffect(() => {
    setPreparedRows(rows);
  }, [rows]);

  const isSelected = (id: RowId) => selectedRows.has(id);

  const isBulkSelected = () => bulkSelected;

  // Toggle selection for a single row
  const onRowSelected = (id: RowId) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(id)) {
        newSelectedRows.delete(id);
      } else {
        newSelectedRows.add(id);
      }
      return newSelectedRows;
    });
  };

  // Toggle selection for all rows
  const onBulkSelect = (selected: boolean) => {
    if (selected) {
      const allRowIds = rows.map((row) => row.id);
      setSelectedRows(new Set(allRowIds));
      setBulkSelected(true);
    } else {
      setSelectedRows(new Set());
      setBulkSelected(false);
    }
  };

  // Handle sort state
  const onSortColumn = (column: string) => {
    setSortColumn(column);
    if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else {
      setSortDirection('asc');
    }
  };

  // Sort rows
  React.useEffect(() => {
    if (!sortColumn) return;
    const sortedRows = [...preparedRows].sort((a: TableDataRow<{ any: any}>, b: TableDataRow) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    setPreparedRows(sortedRows);
  }, [sortColumn, sortDirection, preparedRows]);

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
        selectable,
        selectedRows,
        isSelected,
        isBulkSelected,
        onRowSelected,
        onBulkSelect,
        sortColumn,
        sortDirection,
        onSortColumn
      })}
    </BaseTable>
  );
};

// Export the component as the default export
export default Table;
