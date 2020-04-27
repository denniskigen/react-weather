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
  onCityChange: () => {},
  error: null
};

it("renders without crashing", () => {
  act(() => {
    render(
      <WeatherSearch
        city={fakeProps.city}
        onCityChange={fakeProps.onCityChange}
        error={fakeProps.error}
      />,
      container
    );
  });
});

it("renders a search input where one can type in a location", () => {
  act(() => {
    render(
      <WeatherSearch
        city={fakeProps.city}
        onCityChange={fakeProps.onCityChange}
        error={fakeProps.error}
      />,
      container
    );
  });

  expect(container.textContent).toContain("Enter city name");

  const inputEl = document.querySelector("#search-city");
  expect(inputEl.innerHTML).toBe("");

  act(() => {
    inputEl.value = "Berlin";
    inputEl.dispatchEvent(
      new Event("input", { bubbles: true, cancelable: true })
    );
  });

  expect(inputEl.value).toBe("Berlin");
});
