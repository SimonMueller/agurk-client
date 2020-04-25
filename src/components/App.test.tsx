import React from 'react';
import { render } from '../utils/test-utils';
import App from './App';

it('renders without crashing', () => {
  const result = render(<App />);

  expect(result).toBeDefined();
});
