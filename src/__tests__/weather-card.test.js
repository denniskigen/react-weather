import React from 'react';
import { render, screen } from '../test/app-test-utils';
import { mockWeather } from '../weather-data';
import WeatherCard from '../components/weather-card';

const testProps = {
  location: 'Eldoret',
  units: 'metric',
};

jest.mock('../hooks/useWeather', () => {
  const actualModule = jest.requireActual('../hooks/useWeather');

  return {
    ...actualModule,
    useWeather: jest.fn().mockImplementation(() => ({
      weather: mockWeather,
      isError: null,
      isLoading: false,
    })),
  };
});

describe('WeatherCard', () => {
  test('renders the WeatherCard', () => {
    renderWeatherCard();

    expect(screen.getByText(/eldoret, ke/i)).toBeInTheDocument();
    expect(screen.getByText(/few clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/19/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 17°/i)).toBeInTheDocument();
    expect(screen.getByText(/24m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/68% humidity/i)).toBeInTheDocument();
  });
});

function renderWeatherCard() {
  render(<WeatherCard {...testProps} />);
}
