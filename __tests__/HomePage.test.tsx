import Home from "../pages/home/index";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  it("Renders as expected", () => {
    render(<Home />);
    const logoElement = screen.getByText("Witaj z powrotem,");
    const buttonElement = screen.getByText("Przejdź");
    const footerElement = screen.getByText(/Filmaj.*Wszystkie prawa zastrzeżone/);
    const altImageElement = screen.getByAltText("Jegger photo");

    expect(logoElement).toBeVisible();
    expect(buttonElement).toBeVisible();
    expect(footerElement).toBeVisible();
    expect(altImageElement).toBeVisible();
  });
});
