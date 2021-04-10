import React from 'react';
import { render, screen } from '../app-test-utils';
import WeatherCard from '../components/weather-card';
import { mockForecast, mockWeather } from '../__mocks__/weather.mock';

describe('<WeatherCard />', () => {
  const renderWeatherCard = () =>
    render(
      <WeatherCard
        weather={mockWeather}
        forecast={mockForecast}
        units="metric"
        onUnitsChange={() => {}}
      />,
    );

  test('renders the WeatherCard', async () => {
    renderWeatherCard();

    await screen.findByText(/eldoret, ke/i);
    expect(screen.getByText(/few clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/19°/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 17°/i)).toBeInTheDocument();
    expect(screen.getByText(/24m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/68% humidity/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /cloudy skies on a blustery evening. snuggle up with a hot cuppa/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('list').length).toEqual(5);
  });
});
