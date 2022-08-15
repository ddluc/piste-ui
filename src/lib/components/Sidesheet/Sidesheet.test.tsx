import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { Sidesheet, SidesheetProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<Sidesheet {...args} />);

// Define unit tests
describe('Sidesheet', () => {

  afterEach(cleanup);

  const args: SidesheetProps = { 
    text: 'This is a test'
  }; 

  it('should render', () => {
    const result = render(<Sidesheet {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   
