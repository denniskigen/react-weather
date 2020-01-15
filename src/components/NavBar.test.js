import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavBar from "./NavBar";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the navbar with app logo, app links and side drawer", () => {
  act(() => {
    render(<NavBar />, container);
  });

  expect(container.querySelector("[data-testId='app-logo']").alt).toBe(
    "logo",
    "App logo alt text"
  );
  expect(container.querySelector("[data-testId='app-logo']").src).toBe(
    "http://localhost/logo.svg",
    "App logo src url"
  );
  expect(container.querySelector(".about-btn").textContent).toEqual("About");
  expect(container.querySelector(".github-btn").textContent).toEqual("GitHub");

  // get ahold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=toggle]");
  expect(button.textContent).toBe("About");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
});
