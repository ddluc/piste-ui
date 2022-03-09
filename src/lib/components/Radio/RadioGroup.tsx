import React from 'react';
import { FormMessage, Fieldset, Legend } from '../Form';

export interface Props {
  legend: string;
  name: string;
  touched?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  border?: boolean;
  onChange?: (e: any) => void;
  children: React.ReactNode
}

const RadioGroup = (props: Props): JSX.Element => {
  const {
    name,
    legend,
    error,
    help,
    touched,
    disabled,
    direction = 'vertical',
    border = true,
    onChange,
    children
  } = props;

  const RadioButtons = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Pass shared props to child radio elements
      return React.cloneElement(child, {
        name, error, touched, disabled
      });
    }
    return child;
  });

  return (
    <>
      <Fieldset
        border={border}
        direction={direction}
        onChange={onChange}
        error={!!(touched && error)}
      >
        <Legend error={!!(touched && error)}>{legend}</Legend>
        {RadioButtons}
      </Fieldset>
      <FormMessage error={error} touched={touched} help={help} />
    </>
  );
};

// Export the component as the default export
export default RadioGroup;
