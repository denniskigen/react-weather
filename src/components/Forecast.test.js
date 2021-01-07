import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Forecast from "./Forecast";
import { mockForecast } from "../__mocks__/Weather.mock";

describe("<Forecast />", () => {
  const renderForecast = testProps =>
    render(<Forecast forecast={testProps.forecast} />);

  const testProps = {
    forecast: mockForecast
  };

  test("renders the weekly forecast for the specified location", async () => {
    renderForecast(testProps);

    await screen.findByText("Wednesday");
    expect(screen.getByText("Wednesday")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("Friday")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText(/^14\s*°\s*\//)).toBeInTheDocument();
    expect(screen.getByText(/^14\s*°$/)).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { label: "forecast item" }).length
    ).toEqual(5);
  });
});
