import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from "@/components/sideBar/SideBar";
import Item from "@/components/sideBar/Item";

describe("SideBar", () => {
  it("Renders as expected", () => {
    render(<SideBar />);
    const logoElement = screen.getByText("JEGGER");
    const homeElement = screen.getByText("HOME");
    const dashboardElement = screen.getByText("DASHBOARD");
    const rozliczeniaElement = screen.getByText("ROZLICZENIA");
    const dealerzyElement = screen.getByText("DEALERZY");
    const zadaniaElement = screen.getByText("ZADANIA");
    const powiadomieniaElement = screen.getByText("POWIADOMIENIA");

    expect(logoElement).toBeVisible();
    expect(homeElement).toBeVisible();
    expect(dashboardElement).toBeVisible();
    expect(rozliczeniaElement).toBeVisible();
    expect(dealerzyElement).toBeVisible();
    expect(zadaniaElement).toBeVisible();
    expect(powiadomieniaElement).toBeVisible();
  });

  it("Should call setSelected with correct argument when clicked", () => {
    const setSelectedMock = jest.fn();
    const props = {
      selected: "Item 1",
      title: "Item 2",
      icon: <div>Icon</div>,
      setSelected: setSelectedMock,
    };

    const { getByText } = render(<Item collapsed={false} {...props} />);
    fireEvent.click(getByText("Item 2"));

    expect(setSelectedMock).toHaveBeenCalledWith("Item 2");
  });
});
