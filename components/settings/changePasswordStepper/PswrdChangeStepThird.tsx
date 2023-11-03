import { Box, Typography} from "@mui/material";
import React from "react";

const PswrdChangeStepThird = () => {
  return (
    <Box
    data-testid="third-step"
      sx={{
        margin: "3rem 2rem -0.3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        height: "20rem",
      }}
    >
      <Typography variant="h2" sx={{fontWeight:600, marginBottom:"0.5rem"}}>Hasło zostało zmienione.</Typography>
      <Typography variant="h4" sx={{fontWeight:500}}>
        Pamiętaj aby chronić swoje hasła i nie używać prostych kombinacji! Dbaj o swoje bezpieczeństwo.
      </Typography>
    </Box>
  );
};

export default PswrdChangeStepThird;
