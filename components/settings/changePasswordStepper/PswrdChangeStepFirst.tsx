import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "constants/color-palette";
import React from "react";
import CustomInputField from "../CustomInputField";

const PswrdChangeStepFirst = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        margin: "0rem 0rem 3rem 0rem",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        width: "30rem",
      }}
    >
      <CustomInputField label={"Stare hasło"} fullWidth={true} variant={"outlined"} type={"password"} margin={"0.5rem 1.5rem"}/>
      <CustomInputField label={"Nowe hasło"} fullWidth={true} variant={"outlined"} type={"password"} margin={"0.5rem 1.5rem"}/>
      <CustomInputField label={"Powtórz hasło"} fullWidth={true} variant={"outlined"} type={"password"} margin={"0.5rem 1.5rem"}/>
    </Box>
  );
};

export default PswrdChangeStepFirst;
