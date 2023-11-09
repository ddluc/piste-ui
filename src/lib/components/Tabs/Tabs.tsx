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
  id: string;
};

export interface Props {
  tabs: TabData[];
}

// Declare the component
const Tabs = (props: Props): JSX.Element => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    console.log(`${index} was clicked`);
    setActiveTab(index);
  };

  return (
    <DefaultTabs>
      {tabs.map((tab, index) => (
        <Tab key={tab.id} label={tab.label} isActive={index === activeTab} onClick={() => handleTabClick(index)} />
      ))}
    </DefaultTabs>
  );
};

// Export the component as the default export
export default Tabs;
