import React from 'react';
import { Skeleton, BaseSkeletonProps } from '../../Skeleton';
import { Flex } from '../../Flex';

export interface TableSkeletonProps extends BaseSkeletonProps{
  rowCount?: number
  colCount?: number
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export const TableSkeleton = ({ rowCount = 5, colCount = 5, spacing }: TableSkeletonProps) => (
  <Flex column gap="10px">
    <Flex row gap="20px" justifyContent="space-between">
      {Array.from({ length: colCount }).map(() => (
        <Skeleton type="box" height={spacing * 16} width={250} />
      ))}
    </Flex>
    <Flex column gap="4px">
      {Array.from({ length: rowCount }).map(() => (
        <Skeleton type="box" height={spacing * 16} fluid />
      ))}
    </Flex>
  </Flex>
);
