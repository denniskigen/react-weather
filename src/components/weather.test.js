import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Weather from "./weather";
import { mockCurrentWeather, mockForecast } from "../__mocks__/weather.mock";

describe("<Weather />", () => {
  const renderWeather = testProps =>
    render(
      <Weather
        city={testProps.city}
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        error={testProps.error}
        onCityChange={testProps.onCityChange}
      />
    );

  beforeEach(() => {
    const testProps = {
      city: "Eldoret",
      currentWeather: mockCurrentWeather,
      forecast: mockForecast,
      error: null,
      onCityChange: () => {},
    };

    renderWeather(testProps);
  });

  test("renders the weather search and app layout", () => {
    expect(screen.getByText("Eldoret, KE")).toBeInTheDocument();
    expect(
      screen.getByText("Wednesday, 10:36 AM, Few Clouds")
    ).toBeInTheDocument();
    expect(screen.getByText("19°C")).toBeInTheDocument();
    expect(screen.getByText(/24 km\/h Winds\s+/)).toBeInTheDocument();
    expect(screen.getByText(/68% Humidity/)).toBeInTheDocument();
    expect(
      screen.getByText(
        "Cloudy skies on a blustery evening. Snuggle up with a hot cuppa"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Wednesday")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("Friday")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
  });
});
