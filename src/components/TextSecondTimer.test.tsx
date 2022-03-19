import React from 'react';
import { render, act } from '../utils/test-utils';
import TextSecondTimer from './TextSecondTimer';

describe('Text second timer component', () => {
  beforeEach(() => jest.useFakeTimers());

  it('shows zero if timeout is zero', () => {
    const { getByText } = render(<TextSecondTimer timeoutInSeconds={0} />);

    expect(getByText('0')).toBeVisible();
  });

  it('shows initial timeout value if timeout is below zero', () => {
    const { getByText } = render(<TextSecondTimer timeoutInSeconds={-5} />);

    expect(getByText('-5')).toBeVisible();
  });

  it('shows initial timeout value if timeout is greater than zero', () => {
    const { getByText } = render(<TextSecondTimer timeoutInSeconds={20} />);

    expect(getByText('20')).toBeVisible();
  });

  it('shows timeout value minus advanced time', () => {
    const { getByText } = render(<TextSecondTimer timeoutInSeconds={20} />);

    act(() => {
      jest.advanceTimersByTime(11000);
    });

    expect(getByText('10')).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(getByText('0')).toBeVisible();
  });

  it('shows zero after all timers have run', () => {
    const { getByText } = render(<TextSecondTimer timeoutInSeconds={20} />);

    act(() => {
      jest.runAllTimers();
    });

    expect(getByText('0')).toBeVisible();
  });
});
