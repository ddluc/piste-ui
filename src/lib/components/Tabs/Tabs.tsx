/* eslint-disable no-underscore-dangle */
import React, {useState} from 'react';
import Tab from './Tab';
import { DefaultTabs } from './bin/DefaultTabs';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory

// Define a type for individual tab data
type TabData = {
  label: string;
  name: string;
  active: number;
};

export interface Props {
  tabs: TabData[];
}

// Declare the component
const Tabs = (props: Props, active: number): JSX.Element => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(active);

  const onTabChange = (index: number) => {
    console.log(`${index} was clicked`);
    setActiveTab(index);
  };

  return (
    <DefaultTabs>
      {tabs.map((tab, index) => (
        <Tab key={tab.name} label={tab.label} isActive={index === activeTab} onClick={() => onTabChange(index)} />
      ))}
    </DefaultTabs>
  );
};

// Export the component as the default export
export default Tabs;
