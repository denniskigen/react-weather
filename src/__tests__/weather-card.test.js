import React from 'react';
import { render, screen, waitForLoadingToFinish } from '../test/app-test-utils';
import WeatherCard from '../components/weather-card';

const testProps = {
  location: 'Eldoret',
  units: 'metric',
};

describe('WeatherCard', () => {
  test('renders the WeatherCard', async () => {
    renderWeatherCard();

    await waitForLoadingToFinish();

    expect(screen.getByText(/eldoret, ke/i)).toBeInTheDocument();
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

function renderWeatherCard() {
  render(<WeatherCard {...testProps} />);
}
