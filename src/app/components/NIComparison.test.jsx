import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NIComparison from './NIComparison';

describe('NIComparison component', () => {
  it('displays error message when fetch request fails', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch National Insurance data'));
    render(<NIComparison date="2023-03-17" title="National Insurance" income={40000} />);
    await waitFor(() => screen.getByText('Failed to fetch National Insurance data'));
    expect(screen.getByText('Failed to fetch National Insurance data')).toBeInTheDocument();
  });

  it('displays National Insurance amount when fetch request succeeds', async () => {
    const mockResponse = { ni: 5000 };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });
    render(<NIComparison date="2023-03-17" title="National Insurance" income={40000} />);
    await screen.findByText('5000');
    expect(screen.getByText('5000')).toBeInTheDocument();
  });

  it('displays error when fetch request fails', async () => {
    const mockResponse = { ni: 5000 };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve(mockResponse),
    });
    render(<NIComparison date="2023-03-17" title="National Insurance" income={40000} />);
    await waitFor(() => screen.getByText('Failed to fetch National Insurance data'));
    expect(screen.getByText('Failed to fetch National Insurance data')).toBeInTheDocument();
  });
});
