import { Box, Typography} from "@mui/material";
import React from "react";

interface PswrdChangeStepThirdProps {
  requestStatus: string | null;
}

const handleTextDisplayedBasedOnStatus = (status: string | null) => {

  const text = status === "success" ? 
    <>
     <Typography variant="h2" sx={{fontWeight:600, marginBottom:"0.5rem"}}>Hasło zostało zmienione.</Typography>
      <Typography variant="h4" sx={{fontWeight:500}}>
        Pamiętaj aby chronić swoje hasła i nie używać prostych kombinacji! Dbaj o swoje bezpieczeństwo.
      </Typography>
    </> 
    :
     <>
      <Typography variant="h2" sx={{fontWeight:600, marginBottom:"0.5rem"}}>Zmiana hasła nie powiodła się!</Typography>
      <Typography variant="h4" sx={{fontWeight:500}}>
        Wprowadzone stare hasło jest błędne. Spróbuj ponownie.
      </Typography>
     </>

     return text 
}

const PswrdChangeStepThird = (props : PswrdChangeStepThirdProps) => {
  return (
    <Box
    data-testid="third-step"
      sx={{
        margin: "0rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        height: "18rem",
      }}
    >
      {handleTextDisplayedBasedOnStatus(props.requestStatus)}
    </Box>
  );
};

export default PswrdChangeStepThird;
