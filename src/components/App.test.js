import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import { mockWeatherData, mockForecastData } from "../__mocks__/Weather.mock";

jest.mock("../use-debounce", () => {
  return jest.fn(searchCity => searchCity);
});

describe("<App />", () => {
  const renderApp = () => render(<App />);

  beforeAll(() => {
    process.env.REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
    process.env.REACT_APP_API_KEY = "some-api-key";
    localStorage.clear();
  });
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(window, "fetch");
  });
  afterEach(() => jest.restoreAllMocks());

  test("fetches and then renders the current weather and forecast", async () => {
    window.fetch
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

    renderApp();

    const aboutEl = await screen.findByText("About");
    expect(aboutEl).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Enter city name")).toBeInTheDocument();
    expect(screen.getByText("Eldoret, KE")).toBeInTheDocument();
    expect(
      screen.getByText("Thursday, 1:24 PM, Broken Clouds")
    ).toBeInTheDocument();
    expect(screen.getByText("20°C")).toBeInTheDocument();
    expect(screen.getByText(/30\s+km\/h Winds/)).toBeInTheDocument();
    expect(screen.getByText(/49% Humidity/)).toBeInTheDocument();
    expect(screen.getByText(/Feels like 18°C/)).toBeInTheDocument();
    expect(
      screen.getByText(/Cloudy and blustery outside. Coat required/)
    ).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Tuesday")).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(window.fetch).toHaveBeenCalledWith(
      "https://api.openweathermap.org/data/2.5/weather/?q=Eldoret&units=metric&APPID=some-api-key"
    );
    expect(window.fetch).toHaveBeenCalledWith(
      "https://api.openweathermap.org/data/2.5/forecast/?q=Eldoret&units=metric&APPID=some-api-key"
    );
  });

  test("renders loading spinner & an error if there's a problem getting weather data", async () => {
    const mockErrorResponse = {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      message: "An internal server error occurred"
    };

    window.fetch.mockImplementationOnce(() =>
      Promise.reject(mockErrorResponse)
    );

    renderApp();

    // loading spinner
    await screen.findByRole("progressbar");
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByText(mockErrorResponse.message)).toBeInTheDocument();
  });
});
