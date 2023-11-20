import PswrdChangeStepSecond from "@/components/settings/changePasswordStepper/PswrdChangeStepSecond";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("PswrdChangeStepSecond", () => {
  it("Text change handler is being called", async () => {
    user.setup();
    const textChangeHandler = jest.fn();
    render(<PswrdChangeStepSecond onInputChange={textChangeHandler} requestStatus={"failed"} />);

    const input = screen.getByRole("textbox");
    await user.click(input);
    await user.type(input, "123456");

    expect(input).toBeVisible();
    expect(input).toHaveValue("123456");
    expect(textChangeHandler).toHaveBeenCalledTimes(6);
  });
  it("Wrong code message is being displayed", () => {
    render(<PswrdChangeStepSecond onInputChange={() => {}} requestStatus={"wrong-code"} />);
    const wrongCodeMessage = screen.getByText("Wprowadzony kod jest nieprawidłowy");
    expect(wrongCodeMessage).toBeVisible();
  });
});
