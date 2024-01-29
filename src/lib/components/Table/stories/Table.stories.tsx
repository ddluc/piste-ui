/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, { TableProps } from '../index';

export default {
  title: 'Table',
  component: Table.Table,
  args: {
    spacing: 4,
  } as TableProps
} as ComponentMeta<typeof Table.Table>;

const Template: ComponentStory<typeof Table.Table> = (args: TableProps) => (
  <Table.Table spacing={args.spacing}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width="20%">Column 1</Table.HeaderCell>
        <Table.HeaderCell width="60%">Column 2</Table.HeaderCell>
        <Table.HeaderCell width="20%">Column 3</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.BodyCell>Row 1, Cell 1</Table.BodyCell>
        <Table.BodyCell>Row 1, Cell 2: This is some extra content</Table.BodyCell>
        <Table.BodyCell>Row 1, Cell 3</Table.BodyCell>
      </Table.Row>
      <Table.Row>
        <Table.BodyCell>Row 2, Cell 1</Table.BodyCell>
        <Table.BodyCell>Row 2, Cell 2: This is some extra content</Table.BodyCell>
        <Table.BodyCell>Row 2, Cell 3</Table.BodyCell>
      </Table.Row>
      <Table.Row>
        <Table.BodyCell>Row 2, Cell 1</Table.BodyCell>
        <Table.BodyCell>Row 2, Cell 2: This is some extra content</Table.BodyCell>
        <Table.BodyCell>Row 2, Cell 3</Table.BodyCell>
      </Table.Row>
      {/* Additional rows as needed */}
    </Table.Body>
  </Table.Table>
);

export const Main = Template.bind({});
