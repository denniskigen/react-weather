import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, userEvent, waitFor } from '../test/app-test-utils';
import Navbar from '../components/navbar';

describe('NavBar', () => {
  test('renders the navbar', async () => {
    renderNavbar();

    expect(
      screen.getByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /react weather on github/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  test('clicking the button toggles displaying the main menu', async () => {
    const user = userEvent.setup();
    renderNavbar();

    const toggleButton = screen.getByRole('button', {
      name: /open main menu/i,
    });

    await waitFor(() => user.click(toggleButton));
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).toBeInTheDocument();

    await waitFor(() => user.click(toggleButton));
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
  });
});

function renderNavbar() {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
}
