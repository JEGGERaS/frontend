import { Box, Button, Typography, alpha, useTheme } from "@mui/material";
import { tokens } from "../../../constants/color-palette";
import React, { useState } from "react";
import CustomInputField from "../CustomInputField";
import { red } from "@mui/material/colors";

interface PswrdChangeStepSecondProps {
  requestStatus: string | null;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PswrdChangeStepSecond = (props: PswrdChangeStepSecondProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(props.requestStatus);

  return (
    <Box
      data-testid="second-step"
      sx={{
        margin: "0rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "18rem",
      }}
    >
      <CustomInputField
        label={"Wprowadź kod"}
        onChange={props.onInputChange}
        fullWidth={true}
        variant={"outlined"}
        type={"text"}
      />
      <Typography variant="h5" sx={{ fontWeight: 500, marginTop: "1rem" }}>
        Jednorazowy kod został wygenerowany i wysłany na twoją skrzynkę pocztową. Jeżeli nie otrzymałeś kodu wyślij go
        ponownie.
      </Typography>
      <Button
        sx={{
          backgroundColor: colors.secondary[500],
          marginTop: "1rem",
          color: colors.white[500],
          borderRadius: "0.6rem",
          padding: "0.2rem 1rem 0.2rem 1rem",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light" ? alpha(colors.secondary[300], 0.8) : alpha(colors.secondary[700], 0.8),
          },
        }}
      >
        <Typography variant="h5">Wyślij ponownie</Typography>
      </Button>
      {props.requestStatus === "wrong-code" ? (
        <Typography variant="h5" sx={{ fill: red }}>
          Wprowadzony kod jest nieprawidłowy
        </Typography>
      ) : null}
    </Box>
  );
};

export default PswrdChangeStepSecond;
