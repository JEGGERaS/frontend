import { TextField, alpha, useTheme } from "@mui/material";
import { tokens } from "../../constants/color-palette";
import React from "react";

interface CustomTextFieldProps {
  value: string;
  label: string;
}

const CustomTextField = (props: CustomTextFieldProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <TextField
      id="outlined-basic"
      InputProps={{ disableUnderline: true, disabled:true}}
      InputLabelProps={{
        sx: {
          marginLeft: "1rem",
          top: "-0.5rem",
          textTransform: "uppercase",
          fontWeight: "600",
          color: theme.palette.mode === "light" ? colors.secondary[500] : colors.secondary[100],
        },
      }}
      value={props.value}
      label={props.label}
      variant="standard"
      sx={{
        margin: "2rem 1.5rem 0 1.5rem",
        backgroundColor: alpha(colors.primary[500], 0.2),
        padding: "0rem 1rem 0.5rem 1rem",
        borderRadius: "0.5rem",
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: theme.palette.mode === "light"? colors.black[500]:colors.black[100], //kolor fontu w input
          fontWeight: "600",
          fontSize: "1.5rem",
          cursor: "text"
        },
      }}
    />
  );
};

export default CustomTextField;
