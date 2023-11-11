import PswrdChangeStepThird from "@/components/settings/changePasswordStepper/PswrdChangeStepThird";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("PswrdChangeStepThird", () => {
  it("Text is being displayed accordingly to requestStatus", () => {
    user.setup();
    render(<PswrdChangeStepThird requestStatus={"success"} />);
    const passwordChangedText = screen.getByText("Hasło zostało zmienione.");
    const safePasswordText = screen.getByText(
      "Pamiętaj aby chronić swoje hasła i nie używać prostych kombinacji! Dbaj o swoje bezpieczeństwo."
    );
    expect(passwordChangedText).toBeVisible();
    expect(safePasswordText).toBeVisible();

    render(<PswrdChangeStepThird requestStatus={"failed"} />);
    const passwordChangedText2 = screen.getByText("Zmiana hasła nie powiodła się!");
    const safePasswordText2 = screen.getByText("Wprowadzone stare hasło jest błędne. Spróbuj ponownie.");
    expect(passwordChangedText2).toBeVisible();
    expect(safePasswordText2).toBeVisible();
  });
});
