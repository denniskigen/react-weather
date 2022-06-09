import React from 'react';
import { render, screen } from '../test/app-test-utils';
import { BrowserRouter } from 'react-router-dom';

import About from '../components/about';

describe('About', () => {
  test('renders the about page', async () => {
    renderAbout();

    expect(
      screen.getByRole('heading', { name: /about reactweather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /openweathermap api/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /tailwindcss/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /erik flowers' weather icons/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /vercel/i })).toBeInTheDocument();
    expect(screen.getByAltText(/buy me a coffee/i)).toBeInTheDocument();
  });
});

function renderAbout() {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>,
  );
}
