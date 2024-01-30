import React from 'react';
import { Block } from '../Block';
import { Flex } from '../Flex';
import { FormMessage } from '../Form';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import CheckIcon from './bin/assets/check.svg';
import { Input, Label } from './bin';

export interface BaseProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  checked: boolean;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = BaseProps | SkeletonProps;

const Checkbox = (props: Props): JSX.Element => {

  if (isSkeleton(props)) {
    return (
      <Flex row gap="0px 8px" alignItems="center">
        <Skeleton {...props} type="box" height={24} width={24} />
        <Skeleton {...props} type="box" height={18} width={160} />
      </Flex>
    );
  }

  const {
    name,
    label,
    checked,
    disabled,
    error,
    help,
    touched,
    ...inputProps
  } = props;

  return (
    <Flex position="relative">
      <Input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        aria-label={label}
        aria-invalid={!!(touched && error)}
        error={!!(touched && error)}
        {...inputProps}
      />

      <Label
        error={!!(touched && error)}
        disabled={disabled}
      >
        { checked && <CheckIcon height="10px" width="10px" /> }
        <span>{label}</span>
      </Label>

      <FormMessage error={error} touched={touched} help={help} />
    </Flex>
  );

};

export default Checkbox;
