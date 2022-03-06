import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { TextInput, TextInputProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<TextInput {...args} />);

// Define unit tests
describe('TextInput', () => {

  afterEach(cleanup);

  const args: TextInputProps = { 
    text: 'This is a test'
  }; 

  it('should render', () => {
    const result = render(<TextInput {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   
