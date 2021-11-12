import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('has a container elelment', () => {
  const { getByTestId } = render(<App />);
  const container = getByTestId('app-container');
  expect(container).toBeInTheDocument();
});
