import ChangePasswordModal from "@/components/settings/changePasswordStepper/ChangePasswordModal";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

describe("ChanclgePasswordModal", () => {
  beforeEach(() => {
    render(<ChangePasswordModal isOpen={true} onClose={() => {}} />);
  });
  it("First step renders as expected", () => {
    const labelOldPassword = screen.getByLabelText("Stare hasło");
    const labelNewPassword = screen.getByLabelText("Nowe hasło");
    const labelNewPasswordRepeat = screen.getByLabelText("Powtórz hasło");
    const prevButton = screen.getByRole("button", { name: "Poprzedni" });
    const nextButton = screen.getByRole("button", { name: "Następny" });
    const firstStepDiv = screen.getByTestId("first-step");

    expect(labelOldPassword).toBeVisible();
    expect(labelNewPassword).toBeVisible();
    expect(labelNewPasswordRepeat).toBeVisible();
    expect(prevButton).toBeVisible();
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeVisible();
    expect(nextButton).toBeEnabled();
    expect(firstStepDiv).toBeVisible();
  });
  it("Second step renders as expected", () => {
    const nextButton = screen.getByRole("button", { name: "Następny" });
    fireEvent.click(nextButton);

    waitFor(() => {
      const codeLabel = screen.getByLabelText("Wprowadź kod");
      const sendAgain = screen.getByRole("button", { name: "Wyślij ponownie" });
      const prevButton = screen.getByRole("button", { name: "Poprzedni" });
      const secondStepDiv = screen.getByTestId("second-step");

      expect(codeLabel).toBeVisible();
      expect(sendAgain).toBeVisible();
      expect(sendAgain).toBeEnabled();
      expect(prevButton).toBeVisible();
      expect(prevButton).toBeEnabled();
      expect(secondStepDiv).toBeVisible();
    });
  });

  it("Third step renders as expected", () => {
    const nextButton = screen.getByRole("button", { name: "Następny" });
    fireEvent.click(nextButton);
    waitFor(() => {
      fireEvent.click(nextButton);
      waitFor(() => {
        const thirdStepDiv = screen.getByTestId("third-step");
        const passwordChangedText = screen.getByText("Hasło zostało zmienione.");
        const safePasswordText = screen.getByText(
          "Pamiętaj aby chronić swoje hasła i nie używać prostych kombinacji! Dbaj o swoje bezpieczeństwo."
        );
        const finishButton = screen.getByRole("button", { name: "Zakończ" });

        expect(passwordChangedText).toBeVisible();
        expect(safePasswordText).toBeVisible();
        expect(finishButton).toBeVisible();
        expect(finishButton).toBeEnabled();
        expect(nextButton).not.toBeVisible();
        expect(thirdStepDiv).toBeVisible();
      });
    });
  });
  it("Going to previous step works as expected", () => {
    const nextButton = screen.getByRole("button", { name: "Następny" });
    const prevButton = screen.getByRole("button", { name: "Poprzedni" });
    const firstStepDiv = screen.getByTestId("first-step");

    expect(firstStepDiv).toBeVisible();
    expect(prevButton).toBeDisabled();

    fireEvent.click(nextButton);

    waitFor(() => {
      const secondStepDiv = screen.getByTestId("second-step");
      expect(secondStepDiv).toBeVisible();
      expect(prevButton).toBeEnabled();

      fireEvent.click(prevButton);

      waitFor(() => {
        expect(firstStepDiv).toBeVisible();
        expect(prevButton).toBeDisabled();
      });
    });
  });
  it("Resetting steps works as expected", () => {
    const closeModalButton = screen.getByTestId("close-changePswrd-modal-button");
    const changePasswordModal = screen.getByTestId("change-password-modal");
    fireEvent.click(closeModalButton);
    waitFor(() => {
      const firstStepDiv = screen.getByTestId("first-step");
      expect(firstStepDiv).not.toBeVisible();
      expect(changePasswordModal).not.toBeVisible();
    });
  });
  it("Closing modal when submitting password change works as expected", () => {
    const nextButton = screen.getByRole("button", { name: "Następny" });

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    waitFor(() => {
      const finishButton = screen.getByRole("button", { name: "Zakończ" });
      expect(finishButton).toBeVisible();
      fireEvent.click(finishButton);
      waitFor(() => {
        const changePasswordModal = screen.getByTestId("change-password-modal");
        expect(changePasswordModal).not.toBeVisible();
      });
    });
  });
});
