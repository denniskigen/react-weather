import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";
import "@testing-library/jest-dom/extend-expect";

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

  const setup = () => {
    const utils = render(<WeatherSearch />);
    const input = screen.getByLabelText("search");
    return {
      input,
      ...utils
    };
  };

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
});
