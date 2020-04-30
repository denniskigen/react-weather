import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../use-debounce", () => {
  return jest.fn().mockImplementation(searchCity => {
    return searchCity;
  });
});

describe("<WeatherSearch />", () => {
  let testProps;
  beforeEach(() => {
    testProps = {
      city: "Eldoret",
      onCityChange: () => {},
      error: null
    };
  });

  afterEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(
      <WeatherSearch
        city={testProps.city}
        onCityChange={testProps.onCityChange}
        error={testProps.error}
      />
    );
    expect(container).toBeDefined();
  });

  test("renders a search input where one can type in a location", () => {
    const mockOnCityChange = jest.fn();
    const { getByRole } = render(
      <WeatherSearch
        city={testProps.city}
        onCityChange={mockOnCityChange}
        error={testProps.error}
      />
    );

    expect(getByRole("search")).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Enter city name");

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Berlin" } });

    expect(mockOnCityChange).toHaveBeenCalledTimes(2);
    expect(mockOnCityChange).toHaveBeenCalledWith("Berlin");
  });
});
