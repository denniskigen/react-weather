import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../use-debounce", () => {
  return jest.fn(searchCity => searchCity);
});

describe("<WeatherSearch />", () => {
  const testProps = {
    city: "Eldoret",
    onCityChange: () => {},
    error: null
  };

  const renderWeatherSearch = mockOnCityChange => {
    render(
      <WeatherSearch
        city={testProps.city}
        onCityChange={mockOnCityChange}
        error={testProps.error}
      />
    );
  };

  test("renders a search input where one can type in a city", async () => {
    const mockOnCityChange = jest.fn();
    renderWeatherSearch(mockOnCityChange);

    await screen.findByRole("search");
    expect(screen.getByRole("search")).toBeInTheDocument();
    const searchInput = screen.getByLabelText("Enter city name");
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "Berlin" } });
    await screen.findByLabelText("Enter city name");
    expect(mockOnCityChange).toHaveBeenCalledTimes(2);
    expect(mockOnCityChange).toHaveBeenCalledWith("Berlin");
  });
});
