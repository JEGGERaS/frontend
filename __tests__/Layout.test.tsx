import Layout from "@/components/common/Layout";
import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, screen } from "@testing-library/react";

const LayoutTest = () => {
  return (
    <Layout page={"Test"}>
      <div>This is a test</div>
    </Layout>
  );
};

describe("Layout", () => {
  it("Renders as expected", () => {
    render(<LayoutTest />);
    const pageTitleElement = screen.getByText("Test");
    const pageContentElement = screen.getByText("This is a test");

    expect(pageTitleElement).toBeVisible();
    expect(pageContentElement).toBeVisible();
  });

  it("Opens modal as expected", () => {
    render(<LayoutTest />);
    const buttonElement = screen.getByTestId("user-dropdown-button");

    act(() => {
        fireEvent.click(buttonElement);
    });

    const settingsButton = screen.getByTestId("settings-open-dropdown-item");

    act(() => {
        fireEvent.click(settingsButton);
    });

    const passwordButtonElement = screen.getByText("zmiana hasła");

    expect(passwordButtonElement).toBeVisible();
  })

  it("Opens change password modal as expected", () => {
    render(<LayoutTest />);
    const buttonElement = screen.getByTestId("user-dropdown-button");

    act(() => {
        fireEvent.click(buttonElement);
    });

    const settingsButton = screen.getByTestId("settings-open-dropdown-item");

    act(() => {
        fireEvent.click(settingsButton);
    });

    const passwordButtonElement = screen.getByTestId("change-password-button");

    act(() => {
      fireEvent.click(passwordButtonElement);
  });

    expect(passwordButtonElement).not.toBeVisible();
  });
});
