import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Weather from "./Weather";
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
  city: "Eldoret",
  currentWeather: mockCurrentWeather,
  forecast: mockForecast,
  error: null,
  setCity: () => {}
};

it("renders without crashing", () => {
  act(() => {
    render(
      <Weather
        city={fakeProps.city}
        currentWeather={fakeProps.currentWeather}
        forecast={fakeProps.forecast}
        error={fakeProps.error}
        setCity={fakeProps.setCity}
      />,
      container
    );
  });
});
