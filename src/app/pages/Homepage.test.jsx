import React from 'react';
import {
  render,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from './Homepage';

describe('Homepage', () => {
  let container;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should update income when input value changes', async () => {
    container = render(<Homepage />);

    const incomeInput = container.container.querySelector('#income');

    fireEvent.change(incomeInput, { target: { value: '50000' } });

    act(() => jest.advanceTimersByTime(1000));

    await waitFor(() => expect(incomeInput.value).toBe('50000'));
  });
});
