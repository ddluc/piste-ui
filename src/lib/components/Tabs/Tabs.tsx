/* eslint-disable no-underscore-dangle */
import React from 'react';
import Tab from './Tab';
import { DefaultTabs } from './bin/DefaultTabs';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory

// Define a type for individual tab data
type TabData = {
  label: string;
};

export interface Props {
  tabs: TabData[];
}

// Declare the component
const Tabs = (props: Props): JSX.Element => {
  const { tabs } = props;
  return (
    <DefaultTabs>
      {tabs.map((tab, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tab key={index} label={tab.label} />
      ))}
    </DefaultTabs>
  );
};

// Export the component as the default export
export default Tabs;
