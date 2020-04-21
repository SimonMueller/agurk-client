import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider as MuiStylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'typeface-roboto';
import theme from './theme';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <MuiStylesProvider injectFirst>
          <App />
        </MuiStylesProvider>
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
