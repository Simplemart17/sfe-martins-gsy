import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page content', () => {
  render(<App />);
  const pageContent = screen.getByText('Getting started');
  expect(pageContent).toBeInTheDocument();
});
