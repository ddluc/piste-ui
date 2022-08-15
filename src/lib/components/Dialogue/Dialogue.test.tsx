import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { Dialogue, DialogueProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<Dialogue {...args} />);

// Define unit tests
describe('Dialogue', () => {

  afterEach(cleanup);

  const args: DialogueProps = { 
    text: 'This is a test'
  }; 

  it('should render', () => {
    const result = render(<Dialogue {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   
