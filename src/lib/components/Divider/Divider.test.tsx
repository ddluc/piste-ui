import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { Divider, DividerProps } from './index'; 

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme'; 
// const result = withTheme(<Divider {...args} />);

// Define unit tests
describe('Divider', () => {

  afterEach(cleanup);

  const args: DividerProps = { 
    type: 'horizontal', 
    solid: true,
  }; 

  it('should render', () => {
    const result = render(<Divider {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });

});   
