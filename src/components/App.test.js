import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { mockWeatherData, mockForecastData } from "../__mocks__/Weather.mock";

jest.mock("../use-debounce", () => {
  return jest.fn(searchCity => searchCity);
});

jest.mock(
  "./LoadingSpinner",
  () =>
    function DummyLoadingSpinner() {
      return (
        <div role="progressbar">
          <svg className="MuiCircularProgress-svg">
            <circle className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"></circle>
          </svg>
        </div>
      );
    }
);

describe("<App />", () => {
  afterEach(cleanup);

  afterEach(() => jest.restoreAllMocks());

  test("fetches and then renders the current weather and forecast", async () => {
    jest
      .spyOn(window, "fetch")
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockWeatherData)
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockForecastData)
        })
      );

    const { getByText } = render(<App />);

    const aboutEl = await waitFor(() => getByText("About"));
    expect(aboutEl).toBeInTheDocument();
    expect(getByText("GitHub")).toBeInTheDocument();
    expect(getByText("Enter city name")).toBeInTheDocument();
    expect(getByText("Eldoret, KE")).toBeInTheDocument();
    expect(getByText("Thursday, 1:24 PM, Broken Clouds")).toBeInTheDocument();
    expect(getByText("20°C")).toBeInTheDocument();
    expect(getByText(/30\s+km\/h Winds/)).toBeInTheDocument();
    expect(getByText(/49% Humidity/)).toBeInTheDocument();
    expect(
      getByText("'Netflix and chill' weather. It's pleasant outside")
    ).toBeInTheDocument();
    expect(getByText("Saturday")).toBeInTheDocument();
    expect(getByText("Sunday")).toBeInTheDocument();
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("Tuesday")).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(2);
  });
});
