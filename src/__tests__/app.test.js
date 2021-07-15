import React from 'react';
import { cache } from 'swr';
import {
  act,
  render,
  screen,
  createMemoryHistory,
  waitForLoadingToFinish,
  userEvent,
  Router,
} from '../app-test-utils';
import App from '../components/app';
import {
  mockForecastData,
  mockSearchForecastData,
  mockSearchWeatherData,
  mockWeatherData,
} from '../__mocks__/weather.mock';

const history = createMemoryHistory();

const renderApp = () =>
  render(
    <Router history={history}>
      <App />
    </Router>,
  );

describe('App', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.clearAllTimers());

  beforeEach(() => {
    cache.clear();
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(mockWeatherData));
    fetch.mockResponseOnce(JSON.stringify(mockForecastData));
  });

  test('fetches and renders the current weather and a five day forecast', async () => {
    renderApp();

    await waitForLoadingToFinish();

    expect(
      screen.getByRole('heading', { name: /reactweather/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/eldoret, ke/i)).toBeInTheDocument();
    expect(screen.getByText(/broken clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 18°/i)).toBeInTheDocument();
    expect(screen.getByText(/30m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/49% humidity/i)).toBeInTheDocument();
    expect(
      screen.getByText(/'Netflix and chill' weather. It's pleasant outside/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toEqual(5);
    const forecast = screen.getAllByRole('listitem').map((listItem) => {
      return listItem.textContent;
    });
    expect(forecast).toMatchInlineSnapshot(`
      Array [
        "Saturday22° / 22°",
        "Sunday22° / 22°",
        "Monday22° / 22°",
        "Tuesday20° / 20°",
        "Wednesday21° / 21°",
      ]
    `);
    expect(screen.getByText(/Open source by/i)).toBeInTheDocument();
    expect(screen.getByText(/Dennis Kigen/i)).toBeInTheDocument();
    expect(screen.getByText(/©2020 - now/i)).toBeInTheDocument();
  });

  test('navigates through the app when navbar links are clicked', async () => {
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
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
  });

  test('searching for a valid location returns weather and forecast data for that location', async () => {
    renderApp();

    await waitForLoadingToFinish();

    const searchInput = screen.getByRole('search');
    userEvent.type(searchInput, 'Rio de janeiro');

    fetch.mockResponseOnce(JSON.stringify(mockSearchWeatherData));
    fetch.mockResponseOnce(JSON.stringify(mockSearchForecastData));

    act(() => jest.advanceTimersByTime(2000));

    await screen.findByText(/rio de janeiro, br/i);

    expect(screen.getByText(/light rain/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 15°/i)).toBeInTheDocument();
    expect(screen.getByText(/15m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/67% humidity/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /You can get away with just a sweater today. Disclaimer: I will not be held responsible for any rain-related mishaps/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('list').length).toEqual(5);
  });

  test('toggles units between celsius and fahrenheit', async () => {
    renderApp();

    await waitForLoadingToFinish();

    expect(screen.getByText(/feels like 18°/i)).toBeInTheDocument();

    let openToggleUnitsMenuButton = screen.getByRole('button', {
      name: /open toggle units menu/i,
    });
    userEvent.click(openToggleUnitsMenuButton);

    let toggleUnitsMenu = await screen.findByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Imperial \(F°, mph\)/);

    userEvent.click(toggleUnitsMenu);
    openToggleUnitsMenuButton = await screen.findByRole('button', {
      name: /open toggle units menu/i,
    });

    userEvent.click(openToggleUnitsMenuButton);
    toggleUnitsMenu = await screen.findByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Metric \(C°, m\/s\)/);
  });
});
