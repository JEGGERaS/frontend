import React from "react";
import { tokens } from "../../constants/color-palette";
import { TextField, alpha, useTheme } from "@mui/material";

interface CustomInputFieldProps {
  label: string;
  fullWidth: boolean;
  backgroundColor?: string;
  borderColor?: string;
  type: "password" | "text" | "number" | "email";
  variant: "outlined" | "standard" | "filled";
}

const CustomInputField = (props: CustomInputFieldProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <TextField
      label={props.label}
      variant={props.variant}
      fullWidth={props.fullWidth}
      type={props.type}
      InputLabelProps={{ sx: { fontWeight: "500" } }}
      sx={{
        margin: "1.5rem 1.5rem 0rem 1.5rem",
        backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent",
        fontWeight: "600",
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            borderColor: props.borderColor ? props.borderColor : alpha(colors.primary[500], 0.4),
            borderWidth: "0.15rem",
            borderRadius: "0.75rem",
          },
          "&:hover fieldset": { 
            borderColor: props.borderColor ? props.borderColor : colors.primary[500],
            transition:"0.35s ease-in-out"
        },
        },
      }}
    ></TextField>
  );
};

export default CustomInputField;
