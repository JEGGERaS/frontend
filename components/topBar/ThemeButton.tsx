import { IconButton, alpha, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { WbSunnyRounded, DarkModeRounded } from "@mui/icons-material";
import { tokens } from "../../constants/color-palette";
import { ColorModeContext } from "../../constants/themeConfiguration";

const ThemeButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      data-testid="theme-button"
      onClick={colorMode.toggleColorMode}
      color = {theme.palette.mode === "light" ? "primary" : "inherit"}
      sx={{
        width: "3.5rem",
        height: "3.5rem",
        padding: "0.5rem",
        marginRight: "1rem",
        borderRadius: "1.25rem",
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light" ? alpha(colors.primary[500], 0.8) : alpha(colors.black[300], 0.2),
        },
      }}
    >
      {theme.palette.mode === "light" ? (
        <WbSunnyRounded
          data-testid="theme-button-light"
          sx={{
            color: alpha(colors.primary[500], 0.8),
            backgroundColor: alpha(colors.primary[100], 0.9),
            borderRadius: "1.25rem",
            width: "3.5rem",
            height: "3.5rem",
            padding: "0.5rem",
          }}
        />
      ) : (
        <DarkModeRounded
          data-testid="theme-button-dark"
          sx={{
            color: alpha(colors.white[500], 0.8),
            backgroundColor: alpha(colors.black[100], 0.2),
            borderRadius: "1.25rem",
            width: "3.5rem",
            height: "3.5rem",
            padding: "0.5rem",
          }}
        />
      )}
    </IconButton>
  );
};

export default ThemeButton;
