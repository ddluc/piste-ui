import React from 'react'; 
import { render, cleanup } from "@testing-library/react";

import { DEFAULT_THEME } from '../src/theme/default'; 
import { ThemeProvider } from 'styled-components';

const withTheme = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={DEFAULT_THEME}>
      {component}
    </ThemeProvider>
  ); 
};

export default withTheme; 