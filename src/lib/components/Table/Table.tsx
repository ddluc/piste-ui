import React from 'react';
import { BaseTable } from './bin';
import { Props as BaseTableProps } from './bin/BaseTable';

type RowId = number | string;

export type TableDataRow<T> = T & { id: RowId}

export type TableDataColumn = {
  key: RowId;
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
    rows?: TableDataRow<T>[];
    columns?: TableDataColumn[]
    selectable: boolean,
    isSelected?: (id: RowId) => boolean;
    isBulkSelected?: () => boolean;
    onRowSelected?: (id: RowId) => void;
    onBulkSelect?: (isSelected: boolean) => void;
    selectedRows?: Set<RowId>;
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

  // State to track selected rows
  const [selectedRows, setSelectedRows] = React.useState<Set<RowId>>(new Set());
  const [bulkSelected, setBulkSelected] = React.useState<boolean>(false);

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

  return (
    <BaseTable
      spacing={spacing}
      scrollbar={scrollbar}
      alternate={alternate}
      even={even}
      odd={odd}
    >
      {children({
        rows,
        columns,
        selectable,
        selectedRows,
        isSelected,
        isBulkSelected,
        onRowSelected,
        onBulkSelect
      })}
    </BaseTable>
  );
};

// Export the component as the default export
export default Table;
