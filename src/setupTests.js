import '@testing-library/jest-dom/extend-expect';
import { mockForecastData, mockWeatherData } from './__mocks__/weather.mock';

process.env.REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
process.env.REACT_APP_API_KEY = 'some-api-key';

async function mockFetch(url) {
  switch (url) {
    case (url.match(/\/weather\//) || {}).input:
      return {
        ok: true,
        json: async () => mockWeatherData,
      };
    case (url.match(/\/forecast\//) || {}).input:
      return {
        ok: true,
        json: async () => mockForecastData,
      };
    default:
      throw new Error(`Unhandled request: ${url}`);
  }
}

beforeAll(() => jest.spyOn(window, 'fetch'));
beforeEach(() => window.fetch.mockImplementation(mockFetch));
