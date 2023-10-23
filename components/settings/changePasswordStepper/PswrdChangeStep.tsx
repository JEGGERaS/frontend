import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "constants/color-palette";
import React from "react";
import CustomInputField from "../CustomInputField";

interface PswrdChangeStepProps {
  step: number;
  margin?: string;
}

const PswrdChangeStep = (props: PswrdChangeStepProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let content;

  switch (props.step) {
    case 0:
      content = (
        <>
          <CustomInputField label={"Stare hasło"} fullWidth={true} variant={"outlined"} type={"password"} />
          <CustomInputField label={"Nowe hasło"} fullWidth={true} variant={"outlined"} type={"password"} />
          <CustomInputField label={"Powtórz hasło"} fullWidth={true} variant={"outlined"} type={"password"} />
        </>
      );
      break;
    case 1:
      content = (
        <>
          <CustomInputField label={"Wprowadź kod"} fullWidth={true} variant={"outlined"} type={"password"} />
          <Typography alignContent={"justify"}>Jednorazowy kod został wygenerowany i wysłany na twoją skrzynkę pocztową.
            Jeżeli nie otrzymałeś kodu wyślij go ponownie.
          </Typography>
          <Button>
            <Typography>Wyślij ponownie</Typography>
          </Button>
        </>
      );
      break;
    case 2:
      content = (
        <>
          <Typography variant="h2">Hasło zostało zmienione.</Typography>
          <Typography variant="h4" align="justify">
            Pamiętaj aby chronić swoje hasła i nie używać prostych kombinacji! Dbaj o swoje bezpieczeństwo!
          </Typography>
        </>
      );
      break;
    default:
      content = (
        <>
          <Typography variant="h2">Wystąpił problem podczas zmiany hasła. Przepraszamy.</Typography>
        </>
      );
  }

  return (
    <Box
      sx={{
        margin: props.margin,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        width:"30rem"
      }}
    >
      {content}
    </Box>
  );
};

export default PswrdChangeStep;
