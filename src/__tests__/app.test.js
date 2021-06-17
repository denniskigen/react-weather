import React from 'react';
import {
  render,
  screen,
  createMemoryHistory,
  waitForLoadingToFinish,
  userEvent,
  Router,
} from '../app-test-utils';
import App from '../components/app';

jest.mock('lodash', () => {
  const module = jest.requireActual('lodash');
  module.debounce = jest.fn((fn) => fn);
  return module;
});

describe('<App />', () => {
  const history = createMemoryHistory();

  const renderApp = () =>
    render(
      <Router history={history}>
        <App />
      </Router>,
    );

  test('renders the app', async () => {
    renderApp();

    await waitForLoadingToFinish();

    expect(
      screen.getByRole('heading', { name: /reactweather/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
    await screen.findByText(/eldoret, ke/i);
    expect(screen.getByText(/broken clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 18°/i)).toBeInTheDocument();
    expect(screen.getByText(/30m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/49% humidity/i)).toBeInTheDocument();
    expect(
      screen.getByText(/'Netflix and chill' weather. It's pleasant outside/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('list').length).toEqual(5);
    expect(screen.getByText(/Open source by/i)).toBeInTheDocument();
    expect(screen.getByText(/Dennis Kigen/i)).toBeInTheDocument();
    expect(screen.getByText(/©2020 - now/i)).toBeInTheDocument();
  });

  test('clicking navbar links navigates through the app', async () => {
    renderApp();

    await waitForLoadingToFinish();

    const aboutLink = screen.getByText(/about/i);
    const leftClick = { button: 0 };
    userEvent.click(aboutLink, leftClick);

    expect(
      screen.getByRole('heading', { name: /about reactweather/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ReactWeather is a beautiful weather app/i),
    ).toBeInTheDocument();

    const homeLink = screen.getByRole('heading', { name: /^reactweather$/i });
    userEvent.click(homeLink, leftClick);

    expect(screen.queryByText(/about reactweather/i)).not.toBeInTheDocument();
  });
});
