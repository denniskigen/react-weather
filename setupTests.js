/* eslint-env node */
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { server } from './src/mocks/server.js';

import.meta.env.VITE_API_URL = 'https://api.openweathermap.org/data/2.5';
import.meta.env.VITE_API_KEY = 'ed09485536a14ea098e9de03ecff2d4d';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

beforeAll(() =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  }),
);
