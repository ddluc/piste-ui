/* eslint-disable no-underscore-dangle */
import React from 'react';
import { DefaultTab } from './bin/DefaultTab';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props {
  label: string
}

// Declare the component
const Tab = (props: Props): JSX.Element => {
  const { label } = props;
  return (<div>{label}</div>);
};

// Export the component as the default export
export default Tab;
