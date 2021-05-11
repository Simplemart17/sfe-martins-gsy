import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page text', () => {
  render(<App />);
  const pageText = screen.getByText('This is a template page');
  expect(pageText).toBeInTheDocument();
});
