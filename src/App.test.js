import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /home/i,
  });
  expect(heading).toBeInTheDocument();
});
