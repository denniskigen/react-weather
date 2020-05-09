import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "./Weather";
import { mockCurrentWeather, mockForecast } from "../__mocks__/Weather.mock";

describe("<Weather />", () => {
  let testProps;

  beforeEach(() => {
    testProps = {
      city: "Eldoret",
      currentWeather: mockCurrentWeather,
      forecast: mockForecast,
      error: null,
      onCityChange: () => {}
    };
  });

  test("renders the weather search and app layout", () => {
    render(
      <Weather
        city={testProps.city}
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        error={testProps.error}
        onCityChange={testProps.onCityChange}
      />
    );

    expect(screen.getByText("Eldoret, KE")).toBeInTheDocument();
    expect(
      screen.getByText("Wednesday, 10:36 AM, Few Clouds")
    ).toBeInTheDocument();
    expect(screen.getByText("19°C")).toBeInTheDocument();
    expect(screen.getByText(/24 km\/h Winds\s+/)).toBeInTheDocument();
    expect(screen.getByText(/68% Humidity/)).toBeInTheDocument();
    expect(
      screen.getByText(
        "Great day for a bit of laundry and maybe a nice picnic date later :)"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Wednesday")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("Friday")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
  });
});
