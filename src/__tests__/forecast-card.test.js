import React from 'react';
import { render, screen } from '../test/app-test-utils';
import { mockForecast } from '../weather-data';
import ForecastCard from '../components/forecast-card';

const testProps = {
  location: 'Eldoret',
  units: 'metric',
};

jest.mock('../hooks/useWeather', () => {
  const actualModule = jest.requireActual('../hooks/useWeather');

  return {
    ...actualModule,
    useWeather: jest.fn().mockImplementation(() => ({
      forecast: mockForecast,
      isError: null,
      isLoading: false,
    })),
  };
});

describe('ForecastCard', () => {
  test('renders the weekly forecast for the specified location', () => {
    renderForecast(testProps);

    const forecast = screen.getAllByRole('listitem').map((listItem) => {
      return listItem.textContent;
    });

    const expected = [
      'Wednesday14° / 14°',
      'Thursday15° / 15°',
      'Friday17° / 17°',
      'Saturday13° / 13°',
      'Sunday16° / 16°',
    ];

    expect(forecast).toEqual(expect.arrayContaining(expected));
  });
});

function renderForecast(testProps) {
  render(<ForecastCard {...testProps} />);
}
