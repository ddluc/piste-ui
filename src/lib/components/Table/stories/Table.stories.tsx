/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, { TableProps } from '../index';
import { Button } from '../../Button';
import { TableDataColumn, TableDataRow } from '../Table';

import mocks, { type Data } from '../__mocks__';

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
    columns: mocks.columns
  } as TableProps<Data>,
  argTypes: {
    even: { control: { type: 'color' } },
    odd: { control: { type: 'color' } }
  }
} as ComponentMeta<typeof Table.Table>;

const Template: ComponentStory<typeof Table.Table> = (args: TableProps<Data>) => (
  <Table.Table
    rows={args.rows}
    columns={args.columns}
    spacing={args.spacing}
    scrollbar={args.scrollbar}
    alternate={args.alternate}
    even={args.even}
    odd={args.odd}
  >
    {({ rows, columns }) => (
      <>
        <Table.Header>
          <Table.Row>
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
