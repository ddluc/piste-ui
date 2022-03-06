import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { Label, LabelProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<Label {...args} />);

// Define unit tests
describe('Label', () => {

  afterEach(cleanup);

  const args: LabelProps = { 
    text: 'This is a test'
  }; 

  it('should render', () => {
    const result = render(<Label {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   
