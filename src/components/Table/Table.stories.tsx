// Table.stories.tsx

import React from "react";
import { Meta, Story } from '@storybook/react';
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import { TableProps } from "./Table.types";

const meta: Meta<TableProps> = {
  title: "Components/Table",
  component: Table,
};

export default meta;

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell> 1</TableCell>
        <TableCell> 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>R 1, c 1</TableCell>
        <TableCell>R 1, c 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>R 2, c 1</TableCell>
        <TableCell>R 2, c 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>R 3, c 1</TableCell>
        <TableCell>R 3, c 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>R 4, c 1</TableCell>
        <TableCell>R 4, c 2</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>F 1</TableCell>
        <TableCell>F 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

// Default Table
export const Default = Template.bind({});
Default.args = {
};

export const DisabledTable = Template.bind({});
DisabledTable.args = {
  disabled: true,
};
