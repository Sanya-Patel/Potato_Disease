import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Use screen.getByText to find the link element with text 'learn react' (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the linkElement is in the document
  expect(linkElement).toBeInTheDocument();
});
