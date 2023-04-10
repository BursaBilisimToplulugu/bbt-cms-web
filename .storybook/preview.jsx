import { store } from '../src/modules/core/store';
import 'nprogress/nprogress.css';
import CssBaseline from '@mui/material/CssBaseline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Provider } from 'react-redux';
import { SidebarProvider } from '../src/modules/common/contexts/SidebarContext';
import ThemeProvider from '../src/modules/core/theme/ThemeProvider';
import { Story } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <SidebarProvider>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Story />
          </LocalizationProvider>
        </ThemeProvider>
      </SidebarProvider>
    </Provider>
  )
];
