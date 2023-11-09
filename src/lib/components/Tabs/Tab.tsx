/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';

export interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void; // The onClick handler function
}

const StyledTab = styled.div`
    &:hover {
        cursor: pointer;
    }
    &.tab.active {
    background-color: yellow;
  }
`;

// Declare the component
const Tab: React.FC<Props> = ({ label, onClick, isActive }): JSX.Element => {
  const tabClassName = isActive ? 'tab active' : 'tab';
  return (
    <StyledTab onClick={onClick} className={tabClassName}>{label}</StyledTab>

  );
};

// Export the component as the default export
export default Tab;