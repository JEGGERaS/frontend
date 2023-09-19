import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const titleElement = screen.getByText("hello world");
    expect(titleElement).toBeInTheDocument();
  });
});
