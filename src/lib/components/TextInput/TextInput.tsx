import React, { forwardRef } from 'react';
import { Block } from '../Block';
import { Label } from '../Label';

import ErrorText from './bin/ErrorText';
import Input from './bin/Input';

export interface Props {
  name: string;
  label: string;
  placeholder?: string;
  hideLabel?: boolean;
  animated?: boolean;
  error?: string;
  value?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  touched?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput = forwardRef<HTMLInputElement, Props>((props: Props, ref): JSX.Element => {

  const {
    name,
    label,
    hideLabel,
    animated = false,
    placeholder,
    type,
    error,
    value,
    onChange,
    onBlur,
    touched,
    disabled,
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur(event);
  };

  const hasError = (): boolean => (touched && !!error);

  return (
    <Block>
      <Label
        value={label}
        htmlFor={name}
        disabled={disabled}
        error={!!(touched && error)}
        hideLabel={hideLabel}
        animated={animated}
        isFocused={isFocused}
        isActive={(isFocused || value.length > 0)}
        position={{ x: 8, y: 10 }}
        transpose={{ x: -8, y: -20 }}
        scale={0.8}
      >
        <Input
          id={name}
          aria-label={label}
          disabled={disabled}
          placeholder={animated ? '' : placeholder}
          error={hasError()}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          ref={ref}
        />
      </Label>
      <ErrorText error={error} touched={touched} />
    </Block>
  );

});

export default TextInput;
