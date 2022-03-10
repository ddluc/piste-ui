import React, { forwardRef } from 'react';
import { Block } from '../Block';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { FormMessage } from '../Form';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';

import Input from './bin/Input';

interface BaseProps {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  hideLabel?: boolean;
  animated?: boolean;
  error?: string;
  help?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  touched?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = BaseProps | SkeletonProps;

const TextInput = forwardRef<HTMLInputElement, Props>((props: Props, ref): JSX.Element => {

  if (isSkeleton(props)) {
    const { animated, hideLabel } = props;
    return (
      <Flex column gap="8px 0px">
        { !(animated || hideLabel) && <Skeleton {...props} type="box" height={14} width={140} /> }
        <Skeleton {...props} type="box" height={40} fluid />
      </Flex>
    );
  }

  const {
    name,
    label,
    value,
    hideLabel,
    animated = false,
    placeholder,
    type,
    error,
    help,
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
      <FormMessage error={error} touched={touched} help={help} />
    </Block>
  );

});

export default TextInput;
