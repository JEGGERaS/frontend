import { Box } from "@mui/material";
import React from "react";
import CustomInputField from "../CustomInputField";

const PswrdChangeStepFirst = () => {

  return (
    <Box
      data-testid="first-step"
      sx={{
        margin: "0rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        height: "18rem",
      }}
    >
      <CustomInputField label={"Stare hasło"} fullWidth={true} variant={"outlined"} type={"password"}/>
      <CustomInputField label={"Nowe hasło"} fullWidth={true} variant={"outlined"} type={"password"} />
      <CustomInputField label={"Powtórz hasło"} fullWidth={true} variant={"outlined"} type={"password"}/>
    </Box>
  );
};

export default PswrdChangeStepFirst;
