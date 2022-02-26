import React from 'react'; 
import { render, cleanup } from "@testing-library/react";
import { __Component, __ComponentProps } from './index'; 

afterEach(cleanup);

const args: __ComponentProps = { 
  text: 'This is a test'
}; 

// Define unit tests
describe('__Component', () => {
  it('should render', () => {
    const result = render(<__Component {...args} />);
    const component = result.container.firstChild; 
    expect(component).toMatchSnapshot(); 
  });
});   