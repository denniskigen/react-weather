import React from 'react';
import { render, screen, userEvent } from '../test/app-test-utils';
import App from '../components/app';

jest.mock('lodash-es/debounce', () => jest.fn((fn) => fn));

const renderApp = () => {
  render(<App />);
};

describe('App', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.clearAllTimers());

  test('renders a light theme by default', () => {
    renderApp();

    expect(screen.getByTitle('dark theme')).toBeInTheDocument();
    userEvent.click(screen.getByTitle('dark theme'));
    expect(screen.queryByTitle('dark theme')).not.toBeInTheDocument();
    expect(screen.getByTitle('light theme')).toBeInTheDocument();
  });

  test('navigates through the app when navbar links are clicked', async () => {
    renderApp();

    const aboutLink = screen.getByText(/about/i);
    const leftClick = { button: 0 };
    userEvent.click(aboutLink, leftClick);

    expect(
      screen.getByRole('heading', { name: /about reactweather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ReactWeather is a beautiful weather app/i),
    ).toBeInTheDocument();

    const homeLink = screen.getAllByRole('heading', {
      name: /^reactweather$/i,
    })[0];
    userEvent.click(homeLink, leftClick);

    expect(screen.queryByText(/about reactweather/i)).not.toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
  });

  test('toggles units between celsius and fahrenheit', () => {
    renderApp();

    let openToggleUnitsMenuButton = screen.getByRole('button', {
      name: /open toggle units menu/i,
    });
    userEvent.click(openToggleUnitsMenuButton);

    let toggleUnitsMenu = screen.queryByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Imperial \(F°, mph\)/);

    userEvent.click(toggleUnitsMenu);
    openToggleUnitsMenuButton = screen.queryByRole('button', {
      name: /open toggle units menu/i,
    });

    userEvent.click(openToggleUnitsMenuButton);
    toggleUnitsMenu = screen.queryByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Metric \(C°, m\/s\)/);
  });
});
