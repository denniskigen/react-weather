import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

describe("<NavBar />", () => {
  afterEach(cleanup);

  test("renders without crashing", () => {
    const { container } = render(<NavBar />);

    expect(container).toBeDefined();
  });

  test("renders the navbar with the app logo, app links and side drawer", () => {
    const { getByText, getByAltText } = render(<NavBar />);

    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("GitHub")).toBeInTheDocument();
    expect(getByAltText("logo")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("toggle"));

    expect(screen.getByText("ReactWeather")).toBeInTheDocument();
    expect(screen.getByText(/is a labor of/)).toBeInTheDocument();
    expect(screen.getByText("♥️")).toBeInTheDocument();
    expect(screen.getByText(/project lovingly crafted by/)).toBeInTheDocument();
    expect(screen.getByText("@denniskigen")).toBeInTheDocument();
    expect(screen.getByText(/It draws inspiration from/)).toBeInTheDocument();
    expect(screen.getByText("ng-weather")).toBeInTheDocument();
    expect(
      screen.getByText(/, a similar projected written in Angular./)
    ).toBeInTheDocument();
    expect(screen.getByText("Credits")).toBeInTheDocument();
    expect(screen.getByText("Material UI")).toBeInTheDocument();
    expect(screen.getByText("OpenWeatherMap API")).toBeInTheDocument();
    expect(screen.getByText(/Erik Flowers' weather icons/)).toBeInTheDocument();
    expect(screen.getByText(/icon made by/)).toBeInTheDocument();
    expect(screen.getByText("Good ware")).toBeInTheDocument();
    expect(screen.getByText("flaticon")).toBeInTheDocument();
  });
});
