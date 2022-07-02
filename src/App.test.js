import { render, screen } from '@testing-library/react';
import MCreate from './MCreate';

test('renders learn react link', () => {
  render(<MCreate />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
