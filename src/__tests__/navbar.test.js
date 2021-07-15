import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, userEvent } from '../app-test-utils';
import Navbar from '../components/navbar';

describe('NavBar', () => {
  const renderNavbar = () =>
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

  test('renders the navbar', async () => {
    renderNavbar();

    expect(
      screen.getByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /reactweather/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /react weather on github/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('switch').length).toEqual(2);
  });

  test('clicking the button toggles displaying the main menu', async () => {
    renderNavbar();

    const toggleButton = screen.getByRole('button', {
      name: /open main menu/i,
    });

    userEvent.click(toggleButton);
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).toBeInTheDocument();

    userEvent.click(toggleButton);
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
  });
});
