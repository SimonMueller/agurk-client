import React from 'react';
import hideAfterTimeout from './hideAfterTimeout';
import { render, act } from '../utils/test-utils';

describe('hide after timeout HOC', () => {
  const TextWithProp = ({ count = 0 }: { count: number }) => <p>{`Test ${count}`}</p>;
  const Text = () => <p>Test</p>;
  const hideAfter2Seconds = hideAfterTimeout(2000);
  const TextHiddenAfter2Seconds = hideAfter2Seconds(Text);
  const TextWithPropHiddenAfter2Seconds = hideAfter2Seconds(TextWithProp);

  beforeEach(() => jest.useFakeTimers());

  it('initially shows the component', () => {
    const { getByText } = render(<TextHiddenAfter2Seconds />);

    expect(getByText('Test')).toBeVisible();
  });

  it('shows the component before timeout completed', () => {
    const { getByText } = render(<TextHiddenAfter2Seconds />);

    act(() => {
      jest.runTimersToTime(1500);
    });

    expect(getByText('Test')).toBeVisible();
  });

  it('hides the component after timeout completed', () => {
    const { queryByText } = render(<TextHiddenAfter2Seconds />);

    act(() => {
      jest.runTimersToTime(2100);
    });

    expect(queryByText('Test')).toBeNull();
  });

  it('shows the component again until timeout if a prop changed', () => {
    const { queryByText, rerender } = render(<TextWithPropHiddenAfter2Seconds count={1} />);

    act(() => {
      jest.runAllTimers();
    });

    rerender(<TextWithPropHiddenAfter2Seconds count={2} />);

    expect(queryByText('Test 2')).toBeVisible();
  });
});
