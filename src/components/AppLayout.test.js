import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AppLayout from "./AppLayout";
import { mockCurrentWeather, mockForecast } from "../__mocks__/Weather.mock";

describe("<AppLayout />", () => {
  const renderAppLayout = testProps =>
    render(
      <AppLayout
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        icon={testProps.icon}
        recommendation={testProps.recommendation}
      />
    );

  beforeEach(() => {
    const testProps = {
      currentWeather: mockCurrentWeather,
      forecast: mockForecast,
      icon: "wi wi-day-cloudy-gusts",
      recommendation:
        "Great day for a bit of laundry and maybe a nice picnic date later :)"
    };

    renderAppLayout(testProps);
  });

  test("renders the elements that make up the app layout", async () => {
    await screen.findByText("Eldoret, KE");

    expect(screen.getByText("Eldoret, KE")).toBeInTheDocument();
    expect(
      screen.getByText("Wednesday, 10:36 AM, Few Clouds")
    ).toBeInTheDocument();
    expect(screen.getByText("19°C")).toBeInTheDocument();
    expect(screen.getByText(/Feels like 17°C/)).toBeInTheDocument();
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
