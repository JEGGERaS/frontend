import React, { CSSProperties } from "react";
import { tokens } from "../../constants/color-palette";
import { TextField, alpha, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

interface CustomInputFieldProps {
  label: string;
  fullWidth: boolean;
  backgroundColor?: string;
  borderColor?: string;
  type: "password" | "text" | "number" | "email";
  variant: "outlined" | "standard" | "filled";
  margin?: CSSProperties["margin"];
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
      InputLabelProps={{ sx: { fontWeight: "500", 
      "&.Mui-focused": {
        color: theme.palette.mode === "light" ? colors.black[500] : colors.white[500],
      },
    } }}
      sx={{
        margin: props.margin ? props.margin : "1rem 0rem 0rem 0rem",
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
