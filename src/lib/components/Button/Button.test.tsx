import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { Button, ButtonProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<Button {...args} />);

// Define unit tests
describe('Button', () => {

  afterEach(cleanup);

  const args: ButtonProps = { 
    text: 'This is a test'
  }; 

  it('should render', () => {
    const result = render(<Button {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   
