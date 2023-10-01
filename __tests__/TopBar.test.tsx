import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TopBar from "@/components/topBar/TopBar";
import { alpha, colors } from "@mui/material";
import NotificationButton from "@/components/topBar/NotificationButton";

describe("TopBar", () => {
  it("Check if TopBar renders correctly", () => {
    render(<TopBar page="Sample" />);
    const pageElement = screen.getByText("Sample");

    expect(pageElement).toBeInTheDocument();
  });

  it("Check if ThemeButton renders correctly", () => {
    render(<TopBar page="Sample" />);
    const themeButton = screen.getByTestId("theme-button");

    expect(themeButton).toBeInTheDocument();
  });

  it("Check if ThemeButton changes theme correctly", () => {
    render(<TopBar page="Sample" />);
    const themeButton = screen.getByTestId("theme-button");
    const themeButtonLight = screen.getByTestId("theme-button-light");
    const topBar = screen.getByTestId("top-bar");

    expect(topBar).toHaveStyle("background-color: #fafafa");
    expect(themeButtonLight).toBeInTheDocument();

    fireEvent.click(themeButton);

    const topBarAfter = screen.getByTestId("top-bar");

    waitFor(() => {
        const themeButtonDark = screen.getByTestId("theme-button-dark");
        expect(topBarAfter).toHaveStyle("background-color: #202020");
        expect(themeButtonDark).toBeInTheDocument();
        });
  });

  it("Check if NotificationButton renders correctly", () => {
    render(<TopBar page="Sample" />);
    const notificationButton = screen.getByTestId("notification-button");
    const notificationBadge = screen.getByTestId("notification-badge");

    expect(notificationButton).toBeInTheDocument();
    expect(notificationBadge).toBeInTheDocument();
  });

  it("Check if badge works correctly", () => {
    render(<NotificationButton theme="light" amount={15} />)
    const notificationBadge = screen.getByTestId("notification-badge");

    expect(notificationBadge).toHaveTextContent("15");
  });

  it("Check if UserDropdown renders correctly", () => {
    render(<TopBar page="Sample" />);
    const userDropdownButton = screen.getByTestId("user-dropdown-button");

    expect(userDropdownButton).toBeInTheDocument();
  });

  it("Check if UserDropdown opens correctly", () => {
    render(<TopBar page="Sample" />);
    const userDropdownButton = screen.getByTestId("user-dropdown-button");

    fireEvent.click(userDropdownButton);

    waitFor(() => {
        const userDropdownMenu = screen.getByText("Ustawienia");
        const userDropdown = screen.getByTestId("user-dropdown-menu");
        expect(userDropdown).toBeVisible();
        expect(userDropdownMenu).toBeInTheDocument();
        });

    fireEvent.click(userDropdownButton);

    waitFor(() => {
        const userDropdown = screen.getByTestId("user-dropdown-menu");
        expect(userDropdown).not.toBeVisible();
        });
  });

  it("Check if UserDropdown closes after clicking outside", () => {
    render(<TopBar page="Sample" />);
    const userDropdownButton = screen.getByTestId("user-dropdown-button");

    fireEvent.click(userDropdownButton);

    waitFor(() => {
        const userDropdownMenu = screen.getByText("Ustawienia");
        const userDropdown = screen.getByTestId("user-dropdown-menu");
        expect(userDropdown).toBeVisible();
        expect(userDropdownMenu).toBeInTheDocument();
        });

    fireEvent.click(screen.getByTestId("top-bar"));

    waitFor(() => {
        const userDropdown = screen.getByTestId("user-dropdown-menu");
        expect(userDropdown).not.toBeVisible();
        });
  });

});
