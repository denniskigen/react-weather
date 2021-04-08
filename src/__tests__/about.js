import React from 'react';
import { render, screen } from '../app-test-utils';
import About from '../components/about';

describe('<About />', () => {
  const renderAbout = () => render(<About />);

  test('renders the about page', async () => {
    renderAbout();

    expect(
      screen.getByRole('heading', { name: /about reactweather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /openweathermap api/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /react/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /tailwindcss/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /erik flowers' weather icons/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /dennis kigen/i }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/buy me a coffee/i)).toBeInTheDocument();
  });
});
