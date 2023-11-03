import SettingsModal from "@/components/settings/SettingsModal";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";


describe("SettingsModal", () => {

    it("Renders as expected", () => {
        render(<SettingsModal isOpen={true} onClose={() => {}} user={"Test"} handleShowPassword={() => {}} />);

        const labelFirstName = screen.getByLabelText("imie");
        const labelLastName = screen.getByLabelText("nazwisko");
        const labelPosition = screen.getByLabelText("stanowisko");
        const labelEmail = screen.getByLabelText("email");


        expect(labelFirstName).toBeVisible();
        expect(labelLastName).toBeVisible();
        expect(labelPosition).toBeVisible();
        expect(labelEmail).toBeVisible();
    });
});