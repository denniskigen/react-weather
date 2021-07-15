import React from 'react';
import { cache } from 'swr';
import { render, screen, waitForLoadingToFinish } from '../app-test-utils';
import { mockWeatherData } from '../__mocks__/weather.mock';
import WeatherCard from '../components/weather-card';

const testProps = {
  location: 'Eldoret',
  units: 'metric',
};

const renderWeatherCard = () => render(<WeatherCard {...testProps} />);

describe('WeatherCard', () => {
  beforeEach(() => {
    cache.clear();
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(mockWeatherData));
  });

  test('renders the WeatherCard', async () => {
    renderWeatherCard();

    await waitForLoadingToFinish();

    await screen.findByText(/eldoret, ke/i);
    expect(screen.getByText(/broken clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/20°/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 18°/i)).toBeInTheDocument();
    expect(screen.getByText(/30m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/49% humidity/i)).toBeInTheDocument();
    expect(
      screen.getByText(/'Netflix and chill' weather. It's pleasant outside/i),
    ).toBeInTheDocument();
  });
});
