import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter controls', () => {
  render(<App />);
  expect(screen.getByText(/counter application/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /decrement/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
});
