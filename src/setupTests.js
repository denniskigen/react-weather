import '@testing-library/jest-dom/extend-expect';
import {
  mockForecastData,
  mockSearchForecastData,
  mockSearchWeatherData,
  mockWeatherData,
} from './__mocks__/weather.mock';

process.env.REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
process.env.REACT_APP_API_KEY = 'ed09485536a14ea098e9de03ecff2d4d';

async function mockFetch(url) {
  const errorResponse = {
    status: '404',
    statusText: 'Not Found',
  };

  switch (url) {
    case (url.match(/weather\/\?q=Eldoret/i) || {}).input:
      return {
        ok: true,
        json: async () => mockWeatherData,
      };
    case (url.match(/forecast\/\?q=Eldoret/i) || {}).input:
      return {
        ok: true,
        json: async () => mockForecastData,
      };

    case (url.match(/weather\/\?q=Rio de janeiro/i) || {}).input:
      return {
        ok: true,
        json: async () => mockSearchWeatherData,
      };
    case (url.match(/forecast\/\?q=Rio de janeiro/i) || {}).input:
      return {
        ok: true,
        json: async () => mockSearchForecastData,
      };
    case (url.match(/weather\/\?q=Ryo de janeiro/i) || {}).input:
      return {
        ok: false,
        status: 404,
        json: async () => errorResponse,
      };
    case (url.match(/forecast\/\?q=Ryo de janeiro/i) || {}).input:
      return {
        ok: false,
        status: 404,
        json: async () => errorResponse,
      };
    default:
      throw new Error(`Unhandled request: ${url}`);
  }
}

beforeAll(() => jest.spyOn(window, 'fetch'));
beforeEach(() => window.fetch.mockImplementation(mockFetch));
