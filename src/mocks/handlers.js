import { rest } from 'msw';
import {
  mockForecastData,
  mockSearchForecastData,
  mockSearchWeatherData,
  mockWeatherData,
} from '../test/data/weather-data';

export const handlers = [
  rest.get(/\/weather\//, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get('q');

    if (/Rio de Janeiro/i.exec(searchQuery)) {
      return res(ctx.json(mockSearchWeatherData));
    }

    return res(ctx.json(mockWeatherData));
  }),

  rest.get(/\/forecast\//, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get('q');

    if (/Rio de Janeiro/i.exec(searchQuery)) {
      return res(ctx.json(mockSearchForecastData));
    }

    return res(ctx.json(mockForecastData));
  }),
];
