import { rest } from 'msw';
import {
  mockForecastData,
  mockSearchForecastData,
  mockSearchWeatherData,
  mockWeatherData,
} from '../test/data/weather-data';

export const handlers = [
  rest.get(
    'https://api.openweathermap.org/data/2.5/weather',
    (req, res, ctx) => {
      const searchQuery = req.url.searchParams.get('q');

      if (searchQuery === 'Rio de Janeiro') {
        return res(ctx.json(mockSearchWeatherData));
      }

      return res(ctx.json(mockWeatherData));
    },
  ),

  rest.get(
    'https://api.openweathermap.org/data/2.5/forecast',
    (req, res, ctx) => {
      const searchQuery = req.url.searchParams.get('q');

      if (searchQuery === 'Rio de Janeiro') {
        return res(ctx.json(mockSearchForecastData));
      }

      return res(ctx.json(mockForecastData));
    },
  ),
];
