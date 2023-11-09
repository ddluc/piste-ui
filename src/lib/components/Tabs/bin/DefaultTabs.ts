import styled, { Theme } from 'styled-components';
// Example component Props
type DefaultTabsProps = {

};

// Extend the Component props with the injected theme
export interface ThemedProps extends DefaultTabsProps {
    theme: Theme;
  }

// Defined a styled component implmementation
export const DefaultTabs = styled.div<DefaultTabsProps>`
    display: flex;
    justify-content: space-between;
    background-color: ${(props: ThemedProps) => props.theme.palette.primary.main}; 
  `;
