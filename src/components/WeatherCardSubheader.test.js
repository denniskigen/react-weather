import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WeatherCardSubHeader from "./WeatherCardSubheader";
import { mockCurrentWeather } from "../__mocks__/Weather.mock";

describe("<WeatherCardSubheader />", () => {
  const renderWeatherCardSubheader = testProps =>
    render(<WeatherCardSubHeader currentWeather={testProps.currentWeather} />);

  beforeEach(() => {
    const testProps = {
      currentWeather: mockCurrentWeather
    };
    renderWeatherCardSubheader(testProps);
  });

  test("renders the date, time, and a description of the day's weather", () => {
    expect(
      screen.getByText("Wednesday, 10:36 AM, Few Clouds")
    ).toBeInTheDocument();
  });
});
