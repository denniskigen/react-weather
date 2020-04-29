import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoadingSpinner from "./LoadingSpinner";

describe("<LoadingSpinner />", () => {
  afterEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(<LoadingSpinner />);

    expect(container).toBeDefined();
  });
});
