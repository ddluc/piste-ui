import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { Tabs, TabsProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<Tabs {...args} />);

// Define unit tests
describe('Tabs', () => {

  afterEach(cleanup);

  const args: TabsProps = { 
    text: 'This is a test'
  }; 

  it('should render', () => {
    const result = render(<Tabs {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   