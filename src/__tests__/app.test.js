import React from 'react';
import {
  render,
  screen,
  createMemoryHistory,
  userEvent,
  Router,
} from '../app-test-utils';
import App from '../components/app';

jest.mock('lodash', () => {
  const module = jest.requireActual('lodash');
  module.debounce = jest.fn(fn => fn);
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

  beforeAll(() => {
    process.env.REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
    process.env.REACT_APP_API_KEY = 'some-api-key';
  });
  beforeEach(() => jest.spyOn(window, 'fetch'));
  afterEach(() => jest.restoreAllMocks());

  test('clicking navbar links navigates through the app', async () => {
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

    const homeLink = screen.getByRole('heading', { name: /^reactweather$/i });
    userEvent.click(homeLink, leftClick);

    expect(screen.queryByText(/about reactweather/i)).not.toBeInTheDocument();
  });
});
