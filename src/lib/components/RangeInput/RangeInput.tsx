/* eslint-disable no-underscore-dangle */
import React, { ChangeEvent } from 'react';
import { Label, Slider } from './bin';
import { FormMessage } from '../Form';
import { Flex } from '../Flex';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props {
  label: string
  id: string
  name: string
  min: number
  max: number
  value: number;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// Declare the component
const RangeInput = (props: Props): JSX.Element => {
  const {
    id,
    label,
    name,
    min,
    max,
    value,
    touched,
    error,
    help,
    disabled,
    onChange
  } = props;
  return (
    <Flex column gap="10px">
      <Label htmlFor="range" disabled={disabled} error={!!(touched && error)}>
        <span>{label}</span>
        <Slider
          type="range"
          name={name}
          id={id}
          min={min}
          max={max}
          value={value}
          error={!!(touched && error)}
          disabled={!!disabled}
          onChange={onChange}
        />
      </Label>
      <FormMessage error={error} touched={touched} help={help} />
    </Flex>
  );
};

// Export the component as the default export
export default RangeInput;
