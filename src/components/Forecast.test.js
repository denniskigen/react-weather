import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Forecast from "./Forecast";
import { mockForecast } from "../__mocks__/Weather.mock";

describe("<Forecast />", () => {
  let testProps;
  afterEach(cleanup);

  beforeEach(() => {
    testProps = {
      forecast: mockForecast
    };
  });

  test("renders the weekly forecast for the specified location", async () => {
    const { getByText, getAllByText, getAllByRole } = render(
      <Forecast forecast={testProps.forecast} />
    );

    await waitFor(() => screen.getByText("Wednesday"));

    expect(getByText("Wednesday")).toBeInTheDocument();
    expect(getByText("Thursday")).toBeInTheDocument();
    expect(getByText("Friday")).toBeInTheDocument();
    expect(getByText("Saturday")).toBeInTheDocument();
    expect(getByText("Sunday")).toBeInTheDocument();
    expect(getAllByText("14° /").length).toBe(2);
    expect(getAllByText("14°").length).toBe(2);
    expect(getAllByText("15° /").length).toBe(3);
    expect(getAllByText("15°").length).toBe(3);
    expect(getAllByRole("button", { label: "forecast item" }).length).toEqual(
      5
    );
  });
});
