import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reducer from './redux/index';
import theme from './styled/theme';

const store = createStore(reducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
