import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WeatherSearch from "./weather-search";

describe("<WeatherSearch />", () => {
  test("renders an input where one can type in a city and search", async () => {
    const mockOnCityChange = jest.fn();

    const testProps = {
      city: "Eldoret",
      onCityChange: mockOnCityChange,
      error: null
    };

    render(<WeatherSearch {...testProps} />);

    await screen.findByRole("search");
    expect(screen.getByRole("search")).toBeInTheDocument();
    const searchInput = screen.getByLabelText("Enter city name");
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "Berlin" } });
    await screen.findByRole("progressbar");
    // TODO: Complete test scenario
  });
});
