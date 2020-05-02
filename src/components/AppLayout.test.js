import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
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

  afterEach(cleanup);

  test("renders the elements that make up the app layout", async () => {
    const { getByText } = render(
      <AppLayout
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        icon={testProps.icon}
        recommendation={testProps.recommendation}
      />
    );

    await waitFor(() => screen.getByText("Eldoret, KE"));

    expect(getByText("Eldoret, KE")).toBeInTheDocument();
    expect(getByText("Wednesday, 10:36 AM, Few Clouds")).toBeInTheDocument();
    expect(getByText("19°C")).toBeInTheDocument();
    expect(getByText(/24 km\/h Winds\s+/)).toBeInTheDocument();
    expect(getByText(/68% Humidity/)).toBeInTheDocument();
    expect(
      getByText(
        "Great day for a bit of laundry and maybe a nice picnic date later :)"
      )
    ).toBeInTheDocument();
    expect(getByText("Wednesday")).toBeInTheDocument();
    expect(getByText("Thursday")).toBeInTheDocument();
    expect(getByText("Friday")).toBeInTheDocument();
    expect(getByText("Saturday")).toBeInTheDocument();
    expect(getByText("Sunday")).toBeInTheDocument();
  });
});
