import { render, screen } from '@testing-library/react';
import Hero from './Hero';

it('renders the Hero h1 with the locked accessible name', () => {
  render(<Hero />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'phase-c-e2e-final-final' })
  ).toBeInTheDocument();
});
