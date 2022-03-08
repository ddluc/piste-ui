/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { DEFAULT_THEME } from '../src/theme/default';

const withTheme = (component: React.ReactNode) => (
  render(
    <ThemeProvider theme={DEFAULT_THEME}>
      {component}
    </ThemeProvider>
  )
);

export default withTheme;
