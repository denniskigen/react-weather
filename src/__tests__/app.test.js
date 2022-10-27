import React from 'react';
import {
  render,
  screen,
  userEvent,
  waitFor,
  within,
} from '../test/app-test-utils';
import App from '../components/app';

jest.mock('lodash-es/debounce', () => jest.fn((fn) => fn));

describe('App', () => {
  test('renders a light theme by default', async () => {
    const user = userEvent.setup();
    renderApp();

    const themeToggle = within(
      screen.getByRole('switch', { name: 'dark theme' }),
    ).getByText(/dark theme/i);

    expect(themeToggle).toBeInTheDocument();

    await waitFor(() => user.click(themeToggle));

    expect(screen.queryByTitle('dark theme')).not.toBeInTheDocument();
    expect(screen.getByTitle('light theme')).toBeInTheDocument();
  });

  test('navigates through the app when navbar links are clicked', async () => {
    const user = userEvent.setup();
    renderApp();

    const aboutLink = screen.getByText(/about/i);
    const leftClick = { button: 0 };

    await waitFor(() => user.click(aboutLink, leftClick));

    expect(
      screen.getByRole('heading', { name: /about reactweather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ReactWeather is a beautiful weather app/i),
    ).toBeInTheDocument();

    const homeLink = screen.getAllByRole('heading', {
      name: /^reactweather$/i,
    })[0];

    await waitFor(() => user.click(homeLink, leftClick));

    expect(screen.queryByText(/about reactweather/i)).not.toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
  });

  test('toggles units between celsius and fahrenheit', async () => {
    const user = userEvent.setup();
    renderApp();

    let openToggleUnitsMenuButton = screen.getByRole('button', {
      name: /open toggle units menu/i,
    });

    await waitFor(() => user.click(openToggleUnitsMenuButton));

    let toggleUnitsMenu = screen.queryByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Imperial \(F°, mph\)/);

    await waitFor(() => user.click(toggleUnitsMenu));

    openToggleUnitsMenuButton = screen.queryByRole('button', {
      name: /open toggle units menu/i,
    });

    await waitFor(() => user.click(openToggleUnitsMenuButton));

    toggleUnitsMenu = screen.queryByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Metric \(C°, m\/s\)/);
  });
});

function renderApp() {
  render(<App />);
}
