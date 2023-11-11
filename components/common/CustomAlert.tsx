import {
  CheckRounded,
  InfoRounded,
  WarningRounded,
  ReportGmailerrorredRounded,
  HighlightOffRounded,
} from "@mui/icons-material";
import { Alert, Box, Button, Collapse, Fade, IconButton, useTheme } from "@mui/material";
import React from "react";

interface CustomAlertProps {
  alertType: "error" | "info" | "success" | "warning";
  errorMessage: string;
  onClose: () => void;
}

const alertIcons = {
  error: <ReportGmailerrorredRounded />,
  info: <InfoRounded />,
  success: <CheckRounded />,
  warning: <WarningRounded />,
};

const CustomAlert = (props: CustomAlertProps) => {
  //const [open, setOpen] = React.useState<boolean>(true);
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Fade in={true}>
        <Alert
        icon={alertIcons[props.alertType]}
        variant = {theme.palette.mode === "light" ? "filled" : "standard"}
        severity={props.alertType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ mt: "-0.1rem", fontSize: "1.7rem"}}
              size="small"
              onClick={() => {
                props.onClose();
              }}
            >
              <HighlightOffRounded fontSize="inherit"/>
            </IconButton>
          }
          sx={{mt:"3rem", borderRadius:"0.5rem", fontWeight: 600}}
        >
          {props.errorMessage}
        </Alert>
      </Fade>
    </Box>
  );
};

export default CustomAlert;
