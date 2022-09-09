import React from 'react';
import { render, screen, waitForLoadingToFinish } from '../test/app-test-utils';
import ForecastCard from '../components/forecast-card';

const testProps = {
  location: 'Eldoret',
  units: 'metric',
};

describe('ForecastCard', () => {
  test('renders the weekly forecast for the specified location', async () => {
    renderForecast(testProps);

    await waitForLoadingToFinish();

    const forecast = screen.getAllByRole('listitem').map((listItem) => {
      return listItem.textContent;
    });

    expect(forecast).toMatchSnapshot(`
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

function renderForecast(testProps) {
  render(<ForecastCard {...testProps} />);
}
