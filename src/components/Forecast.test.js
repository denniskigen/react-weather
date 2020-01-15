import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Forecast from "./Forecast";
import { mockForecast } from "../__mocks__/Weather.mock";

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

const fakeProps = { mockForecast };

it("renders the weekly forecast for the specified location", () => {
  act(() => {
    render(<Forecast forecast={fakeProps.mockForecast} />, container);
  });

  const forecastDataItems = container.querySelectorAll(".forecastItem");
  expect(forecastDataItems[0].textContent).toContain("Wednesday");
  expect(forecastDataItems[0].textContent).toContain("14° / 14");
  expect(forecastDataItems[1].textContent).toContain("Thursday");
  expect(forecastDataItems[1].textContent).toContain("14° / 14");
  expect(forecastDataItems[2].textContent).toContain("Friday");
  expect(forecastDataItems[2].textContent).toContain("15° / 15");
  expect(forecastDataItems[3].textContent).toContain("Saturday");
  expect(forecastDataItems[3].textContent).toContain("15° / 15");
  expect(forecastDataItems[4].textContent).toContain("Sunday");
  expect(forecastDataItems[4].textContent).toContain("15° / 15");
});
