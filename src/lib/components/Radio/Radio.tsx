import React from 'react';
import { Block } from '../Block';

import CircleSVG from './bin/assets/circle.svg';

import { Input, Label } from './bin';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  name?: string;
  enabled?: boolean;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
}

// Declare the component
const Radio = (props: Props): JSX.Element => {
  const {
    name,
    label,
    enabled,
    disabled,
    error,
    value,
    touched,
    ...inputProps
  } = props;

  return (
    <Block position="relative">
      <Input
        id={value}
        type="radio"
        name={name}
        checked={enabled}
        disabled={disabled}
        aria-label={label}
        aria-invalid={!!(touched && error)}
        error={!!(touched && error)}
        onChange={() => {}}
        {...inputProps}
      />
      <Label
        htmlFor={value}
        error={!!(touched && error)}
        disabled={disabled}
      >
        { enabled && <CircleSVG height="10px" width="10px" /> }
        <span>{label}</span>
      </Label>
    </Block>
  );
};

// Export the component as the default export
export default Radio;
