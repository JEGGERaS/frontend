import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    page: Palette["primary"];
    textSec: Palette["primary"];
  }

  interface PaletteOptions {
    page?: PaletteOptions["primary"];
    textSec?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    page: true;
    textSec: true;
  }
}

const brightPalette = {
  palette: {
    primary: {
      main: "#F3CB41",
    },
    secondary: {
      main: "#4169F3",
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#3A3A3A",
    },
    background: {
      default: "#FAFAFA",
    },
    page: {
      main: "#FAFAFA",
      dark: "#F5F5F5",
    },
    textSec: {
      main: "#3A3A3A",
      dark: "#000000",
      light: grey[500],
    },
  },
};

const darkPalette = {
  palette: {
    primary: {
      main: "rgba(243, 203, 65, 0.8)",
    },
    secondary: {
      main: "rgba(65, 105, 243, 0.8)",
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#3A3A3A",
    },
    background: {
      default: "#202020",
    },
    page: {
      main: "#FAFAFA",
      dark: "#F5F5F5",
    },
    textSec: {
      main: "#3A3A3A",
      dark: "#000000",
      light: grey[500],
    },
  },
};

const theme = createTheme({
  typography: {
    fontFamily: "Dosis, sans-serif",
  },
  ...brightPalette,
});

export default theme;
