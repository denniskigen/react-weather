import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { mockCurrentWeather, mockForecast } from "../__mocks__/Weather.mock";
import WeatherSearch from "./WeatherSearch";

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
  setCity: () => {},
  error: null
};

it("renders without crashing", () => {
  act(() => {
    render(
      <WeatherSearch
        city={fakeProps.city}
        setCity={fakeProps.setCity}
        error={fakeProps.error}
      />,
      container
    );
  });
});
