import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WeatherCardSubHeader from "./WeatherCardSubheader";
import { mockCurrentWeather } from "../__mocks__/Weather.mock";

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

const fakeProps = { mockCurrentWeather };

it("renders the date, time, and a short description of the day's weather", () => {
  act(() => {
    render(
      <WeatherCardSubHeader currentWeather={fakeProps.mockCurrentWeather} />,
      container
    );
  });

  expect(
    container.querySelector("[data-testId='subheaderContent']").textContent
  ).toContain("Wednesday, 10:36 AM, Few Clouds");
});
