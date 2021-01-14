import React from "react";
import { render, screen } from "@testing-library/react";
import AppLayout from "./AppLayout";
import { mockCurrentWeather, mockForecast } from "../__mocks__/Weather.mock";
import "@testing-library/jest-dom/extend-expect";

describe("<AppLayout />", () => {
  let testProps;
  beforeEach(() => {
    testProps = {
      currentWeather: mockCurrentWeather,
      forecast: mockForecast,
      icon: "wi wi-day-cloudy-gusts",
      recommendation:
        "Great day for a bit of laundry and maybe a nice picnic date later :)"
    };
  });

  test("renders the elements that make up the app layout", async () => {
    render(
      <AppLayout
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        icon={testProps.icon}
        recommendation={testProps.recommendation}
      />
    );

    await screen.findByText("Eldoret, KE");

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
