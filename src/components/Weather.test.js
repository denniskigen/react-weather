import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "./Weather";
import { mockCurrentWeather, mockForecast } from "../__mocks__/Weather.mock";

describe("<Weather />", () => {
  let testProps;
  afterEach(cleanup);

  beforeEach(() => {
    testProps = {
      city: "Eldoret",
      currentWeather: mockCurrentWeather,
      forecast: mockForecast,
      error: null,
      onCityChange: () => {}
    };
  });

  test("renders the navbar, weather search and app layout", async () => {
    const { getByText, getByAltText } = render(
      <Weather
        city={testProps.city}
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        error={testProps.error}
        onCityChange={testProps.onCityChange}
      />
    );

    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("GitHub")).toBeInTheDocument();
    expect(getByAltText("logo")).toBeInTheDocument();
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
    await waitFor(() => getByText("About"));
  });
});
