import React from 'react'; 
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import { DEFAULT_THEME } from '../src/theme/default';
import GlobalFonts from '../src/theme/fonts'; 

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Inject the styled component themes
const themes = [DEFAULT_THEME, DEFAULT_THEME];

addDecorator(withThemesProvider(themes), ThemeProvider);

// Inject the default fonts into storybook
addDecorator((Story) => (
  <>
    <GlobalFonts />
    <Story />
  </>
)); 

// ];

console.log('[THEME]', DEFAULT_THEME); 