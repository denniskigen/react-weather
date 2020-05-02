import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherCardSubHeader from "./WeatherCardSubheader";
import { mockCurrentWeather } from "../__mocks__/Weather.mock";

describe("<WeatherCardSubheader />", () => {
  let testProps;
  beforeEach(() => {
    testProps = {
      currentWeather: mockCurrentWeather
    };
  });

  afterEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(
      <WeatherCardSubHeader currentWeather={testProps.currentWeather} />
    );
    expect(container).toBeDefined();
  });

  test("renders the date, time, and a description of the day's weather", async () => {
    const { getByText } = render(
      <WeatherCardSubHeader currentWeather={testProps.currentWeather} />
    );

    expect(getByText("Wednesday, 10:36 AM, Few Clouds")).toBeInTheDocument();
    await waitFor(() => screen.getByText("Wednesday, 10:36 AM, Few Clouds"));
  });
});
