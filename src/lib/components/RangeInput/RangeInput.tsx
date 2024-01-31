/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { ChangeEvent } from 'react';
import { Label, Slider } from './bin';
import { FormMessage } from '../Form';
import { Flex } from '../Flex';
import { Indicator } from './bin/Indicator';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props {
  label: string
  id: string
  name: string
  min: number
  max: number
  step: number
  thumbSize: number
  value: number;
  units: string;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// Declare the component
const RangeInput = (props: Props): JSX.Element => {

  const {
    id,
    label,
    name,
    min = 0,
    max = 0,
    step = 1,
    thumbSize = 18,
    value,
    units,
    touched = false,
    error,
    help,
    disabled = false,
    hideLabel = false,
    onChange
  } = props;

  const [tooltipPosition, setTooltipPosition] = React.useState<string>('0px');

  React.useEffect(() => {
    const fraction = (value - min) / (max - min);
    const position = `calc(${fraction * 100}% + ${(0.5 - fraction) * thumbSize}px)`;
    setTooltipPosition(position);
  }, [value, min, max]);

  return (
    <Flex column gap="5px">
      <Label htmlFor="range" disabled={disabled} error={!!(touched && error)} show={!hideLabel}>
        <span>{label}</span>
        <Flex column padding={['20px', '0px', '0px', '0px']} position="relative">
          <Indicator position={tooltipPosition}>
            <span>{value} {units}</span>
          </Indicator>
          <Slider
            type="range"
            name={name}
            id={id}
            min={min}
            max={max}
            step={step}
            thumbSize={thumbSize}
            value={value}
            error={!!(touched && error)}
            disabled={!!disabled}
            onChange={onChange}
          />
        </Flex>
      </Label>
      <FormMessage error={error} touched={touched} help={help} />
    </Flex>
  );
};

// Export the component as the default export
export default RangeInput;
