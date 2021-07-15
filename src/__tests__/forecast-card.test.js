import React from 'react';
import { cache } from 'swr';
import { render, screen, waitForLoadingToFinish } from '../app-test-utils';
import { mockForecastData } from '../__mocks__/weather.mock';
import ForecastCard from '../components/forecast-card';

const testProps = {
  location: 'Eldoret',
  units: 'metric',
};

const renderForecast = (testProps) => render(<ForecastCard {...testProps} />);

describe('ForecastCard', () => {
  beforeEach(() => {
    cache.clear();
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(mockForecastData));
  });

  test('renders the weekly forecast for the specified location', async () => {
    renderForecast(testProps);

    await waitForLoadingToFinish();

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
  });
});
