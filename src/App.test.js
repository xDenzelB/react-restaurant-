import { render, screen } from '@testing-library/react';
// import App from './App';
import Create from './CreatePage';

test('Add a New Restaurant', () => {
  render(<Create />);
  const linkElement = screen.getByText(/Add a New Restaurant/i);
  expect(linkElement).toBeInTheDocument();
});
