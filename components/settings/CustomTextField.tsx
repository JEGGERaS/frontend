import { TextField, alpha, useTheme } from "@mui/material";
import { tokens } from "../../constants/color-palette";
import React from "react";

interface CustomTextFieldProps {
  user: string;
  label: string;
}

const CustomTextField = (props: CustomTextFieldProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <TextField
      id="outlined-basic"
      InputProps={{ disableUnderline: true, disabled:true, sx:{
        "& input.Mui-disabled": {
          color: "green"
        },
      }}}
      InputLabelProps={{
        sx: {
          marginLeft: "1rem",
          top: "-0.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: theme.palette.mode === "light" ? colors.secondary[500] : colors.secondary[100],
        },
      }}
      value={props.user}
      label={props.label}
      variant="standard"
      sx={{
        margin: "2rem 2rem 0 2rem",
        backgroundColor: alpha(colors.primary[500], 0.2),
        padding: "0rem 1rem 0.5rem 1rem",
        borderRadius: "1rem",
      }}
    />
  );
};

export default CustomTextField;
