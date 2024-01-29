/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, { TableProps } from '../index';
import { Button } from '../../Button';
import { TableDataColumn, TableDataRow } from '../Table';

import mocks, { type Data } from '../__mocks__';
import { Checkbox } from '../../Checkbox';
import { Flex } from '../../Flex';

export default {
  title: 'core/Table',
  component: Table.Table,
  args: {
    spacing: 4,
    scrollbar: {
      height: 5,
    },
    alternate: true,
    even: 'red',
    odd: 'black',
    rows: mocks.rows,
    columns: mocks.columns,
    selectable: true,
  } as TableProps<Data>,
  argTypes: {
    even: { control: { type: 'color' } },
    odd: { control: { type: 'color' } }
  }
} as ComponentMeta<typeof Table.Table>;

const Template: ComponentStory<typeof Table.Table> = (args: TableProps<Data>) => (
  <Table.Table
    selectable={args.selectable}
    rows={args.rows}
    columns={args.columns}
    spacing={args.spacing}
    scrollbar={args.scrollbar}
    alternate={args.alternate}
    even={args.even}
    odd={args.odd}
  >
    {({ rows, columns, selectable, onRowSelected, onBulkSelect, isSelected, isBulkSelected }) => (
      <>
        <Table.Header>
          <Table.Row>
            {selectable && (
              <Table.HeaderCell width={5} key="bulk-select">
                <Checkbox
                  checked={isBulkSelected()}
                  name="bulk-select"
                  label=""
                  onChange={() => onBulkSelect(!isBulkSelected())}
                />
              </Table.HeaderCell>
            )}
            {columns.map((column: TableDataColumn) => (
              <Table.HeaderCell
                key={column.key}
                width={column.width}
              >
                {column.header}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row: TableDataRow<Data>) => (
            <Table.Row key={row.id}>
              <Table.BodyCell>
                <Checkbox
                  checked={isSelected(row.id)}
                  name={row.id}
                  label=""
                  onChange={(e) => onRowSelected(row.id)}
                />
              </Table.BodyCell>
              <Table.BodyCell>{row.resort}</Table.BodyCell>
              <Table.BodyCell>{row.description}</Table.BodyCell>
              <Table.BodyCell>{row.terrain}</Table.BodyCell>
              <Table.BodyCell>{row.elevation}</Table.BodyCell>
              <Table.BodyCell>{row.runs}</Table.BodyCell>
              <Table.BodyCell>
                <Button variation="default" text="Action" />
              </Table.BodyCell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    )}
  </Table.Table>
);

export const Main = Template.bind({});
