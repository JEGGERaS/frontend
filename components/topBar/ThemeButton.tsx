import {IconButton, alpha, useTheme } from "@mui/material";
import React from "react";
import { WbSunnyRounded, DarkModeRounded } from "@mui/icons-material";
import { tokens } from "constants/color-palette";


interface ThemeButtonProps {
    theme: string;
    }

const ThemeButton = (props : ThemeButtonProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return <IconButton sx={{
    width: "3.5rem",
    height: "3.5rem",
    padding: "0.5rem",
    marginRight: "1rem",
    borderRadius: "1rem",
    "&:hover": {
        backgroundColor: theme.palette.mode === "light" ? alpha(colors.primary[500], 0.8) : alpha(colors.black[300], 0.2),
    }
  }}>
    {props.theme === "light" ?
     <WbSunnyRounded sx={{
        color: alpha(colors.primary[500], 0.8),
        backgroundColor: alpha(colors.primary[100], 0.9),
        borderRadius: "1rem",
        width: "3.5rem",
        height: "3.5rem",
        padding: "0.5rem",
     }} /> : 
     <DarkModeRounded sx={{
        color: alpha(colors.white[500], 0.8),
        backgroundColor: alpha(colors.black[100], 0.2),
        borderRadius: "1rem",
        width: "3.5rem",
        height: "3.5rem",
        padding: "0.5rem",
     }}/>}  
  </IconButton>;
};

export default ThemeButton;