import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AppLayout from "./AppLayout";
import { mockCurrentWeather, mockForecast } from "../__mocks__/Weather.mock";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeProps = {
  currentWeather: mockCurrentWeather,
  forecast: mockForecast,
  icon: "wi wi-day-cloudy-gusts",
  recommendation:
    "Great day for a bit of laundry and maybe a nice picnic date later :)"
};

it("renders without crashing", () => {
  act(() => {
    render(
      <AppLayout
        currentWeather={fakeProps.currentWeather}
        forecast={fakeProps.forecast}
        icon={fakeProps.icon}
        recommendation={fakeProps.recommendation}
      />,
      container
    );
  });
});
