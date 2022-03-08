import React from 'react';
import { Block } from '../Block';
import ErrorText from '../TextInput/bin/ErrorText';

import CheckIcon from './bin/assets/check.svg';
import { Input, Label } from './bin';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  checked: boolean;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
}

const Checkbox = (props: Props): JSX.Element => {

  const {
    name,
    label,
    checked,
    disabled,
    error,
    touched,
    ...inputProps
  } = props;

  return (
    <Block position="relative">
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

      <ErrorText error={error} touched={touched} />
    </Block>
  );

};

export default Checkbox;
