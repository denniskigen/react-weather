import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { mockWeatherData, mockForecastData } from "../__mocks__/Weather.mock";

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

  beforeEach(() => {
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
  });

  test("renders without crashing", async () => {
    const { container } = render(<App />);

    await waitFor(() => expect(container).toBeDefined());

    expect(window.fetch).toHaveBeenCalledTimes(2);
    window.fetch.mockRestore();
  });

  test("renders a loading spinner while fetching weather data", async () => {
    render(<App />);

    await waitFor(() => screen.getByRole("progressbar"));

    expect(screen.getByRole("progressbar")).toBeDefined();
    expect(window.fetch).toHaveBeenCalledTimes(2);
    window.fetch.mockRestore();
  });

  test("fetches and renders weather data", async () => {
    jest.spyOn(window, "fetch").mockReset();

    jest.spyOn(window, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWeatherData)
      })
    );

    jest.spyOn(window, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockForecastData)
      })
    );

    render(<App />);

    await waitFor(() => screen.getByText("About"));

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Enter city name")).toBeInTheDocument();
    expect(screen.getByText("Eldoret, KE")).toBeInTheDocument();
    expect(
      screen.getByText("Thursday, 1:24 PM, Broken Clouds")
    ).toBeInTheDocument();
    expect(screen.getByText("20°C")).toBeInTheDocument();
    expect(screen.getByText(/30\s+km\/h Winds/)).toBeInTheDocument();
    expect(screen.getByText(/49% Humidity/)).toBeInTheDocument();
    expect(
      screen.getByText("'Netflix and chill' weather. It's pleasant outside")
    ).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Tuesday")).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(2);
    window.fetch.mockRestore();
  });
});
