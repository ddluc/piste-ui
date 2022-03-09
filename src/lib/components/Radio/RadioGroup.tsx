import React from 'react';
import ErrorText from '../TextInput/bin/ErrorText';

export interface Props {
  legend: string;
  name: string;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  children: React.ReactNode
}

const RadioGroup = (props: Props): JSX.Element => {
  const {
    name,
    legend,
    error,
    touched,
    disabled,
    onChange,
    children
  } = props;

  const RadioButtons = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        name, error, touched, disabled
      });
    }
    return child;
  });

  return (
    <fieldset onChange={onChange}>
      <legend>{legend}</legend>
      {RadioButtons}
      <ErrorText error={error} touched={touched} />
    </fieldset>
  );
};

// Export the component as the default export
export default RadioGroup;
