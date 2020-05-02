import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../use-debounce", () => {
  return jest.fn(searchCity => searchCity);
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

  test("renders a search input where one can type in a city", async () => {
    const mockOnCityChange = jest.fn();
    const { getByRole, getByLabelText } = render(
      <WeatherSearch
        city={testProps.city}
        onCityChange={mockOnCityChange}
        error={testProps.error}
      />
    );

    await waitFor(() => getByRole("search"));

    expect(getByRole("search")).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Enter city name");

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Berlin" } });

    await waitFor(() => getByLabelText("Enter city name"));

    expect(mockOnCityChange).toHaveBeenCalledTimes(2);
    expect(mockOnCityChange).toHaveBeenCalledWith("Berlin");
  });
});
