import React from "react";
import { cleanup, render } from "@testing-library/react";
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

  test("renders without crashing", () => {
    const { container } = render(<Forecast forecast={testProps.forecast} />);

    expect(container).toBeDefined();
  });

  test("renders the weekly forecast for the specified location", () => {
    const { getByText, getAllByText, getAllByRole } = render(
      <Forecast forecast={testProps.forecast} />
    );

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
