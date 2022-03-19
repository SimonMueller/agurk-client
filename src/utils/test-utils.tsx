import React, { ComponentType, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { StylesProvider as MuiStylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../theme';
import store from '../redux/store';

function AllTheProviders({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <MuiStylesProvider injectFirst>
            { children }
          </MuiStylesProvider>
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

export * from '@testing-library/react';

export { customRender as render };
