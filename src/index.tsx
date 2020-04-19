import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducer from './redux';
import './index.css';
import theme from './theme';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
