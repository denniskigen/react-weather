import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import dayjs from "dayjs";

import App from "./App";
import * as recommendations from "../recommendations";
import {
  mockWeatherData,
  mockForecastData
} from "../__mocks__/Weather.mock.js";

jest.mock("./LoadingSpinner", () => {
  return function DummyLoadingSpinner() {
    return (
      <div>
        <svg className="MuiCircularProgress-svg">
          <circle className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"></circle>
        </svg>
      </div>
    );
  };
});

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

it("renders without crashing", () => {
  act(() => {
    render(<App />, container);
  });
});

it("renders a loading spinner while fetching weather data", async () => {
  jest.spyOn(window, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({})
    })
  );

  jest.spyOn(window, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({})
    })
  );

  await act(async () => {
    render(<App />, container);
  });

  // Fake loading spinner rendered
  expect(container.querySelector("svg").getAttribute("class")).toBe(
    "MuiCircularProgress-svg"
  );
  expect(container.querySelector("svg").childElementCount).toBe(
    1,
    "One child element"
  );
  expect(container.querySelector("circle").getAttribute("class")).toEqual(
    "MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
  );

  window.fetch.mockRestore();
});

it("fetches and renders weather data", async () => {
  const fakeWeatherData = mockWeatherData;
  const fakeForecastData = mockForecastData;

  jest.spyOn(window, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeWeatherData)
    })
  );

  jest.spyOn(window, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeForecastData)
    })
  );

  await act(async () => {
    render(<App />, container);
  });

  // NavBar buttons
  expect(container.querySelector(".about-btn").textContent).toBe("About");
  expect(container.querySelector(".github-btn").textContent).toBe("GitHub");
  expect(container.querySelector(".MuiCardHeader-title").textContent).toContain(
    fakeWeatherData.name,
    fakeWeatherData.sys.country
  );

  let date = fakeWeatherData.dt * 1000;
  let day = dayjs(date).format("dddd");
  let time = dayjs(date).format("h:mm");
  let period = dayjs(date).format("A");
  let recommendation =
    recommendations.default[fakeWeatherData.weather[0].id].recommendation;

  let description = fakeWeatherData.weather[0].description.replace(
    /\w\S*/g,
    txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );

  expect(
    container.querySelector(".MuiCardHeader-subheader").textContent
  ).toContain(day, time, period, description);
  expect(container.querySelector(".big-temp").textContent).toBe(
    Math.round(fakeWeatherData.main.temp) + "°C"
  );
  expect(container.querySelector(".atmospheric-conditions").textContent).toBe(
    Math.round(fakeWeatherData.wind.speed * 3.6) +
      " km/h Winds " +
      fakeWeatherData.main.humidity +
      "% Humidity"
  );
  expect(container.querySelector(".recommendation").textContent).toBe(
    recommendation
  );

  const forecastItems = container.querySelectorAll(".forecastItem");

  expect(forecastItems.length).toBe(5, "Five forecasts");
  expect(forecastItems[0].textContent).toContain("Saturday");
  expect(forecastItems[0].textContent).toContain("14° / 14°");
  expect(forecastItems[1].textContent).toContain("Sunday");
  expect(forecastItems[1].textContent).toContain("13° / 13°");
  expect(forecastItems[2].textContent).toContain("Monday");
  expect(forecastItems[2].textContent).toContain("13° / 13°");
  expect(forecastItems[3].textContent).toContain("Tuesday");
  expect(forecastItems[3].textContent).toContain("13° / 13°");
  expect(forecastItems[4].textContent).toContain("Wednesday");
  expect(forecastItems[4].textContent).toContain("13° / 13°");

  window.fetch.mockRestore();
});
