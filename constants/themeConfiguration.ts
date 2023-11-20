import { alpha, PaletteMode, Theme } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";
import { tokens } from "./color-palette";
import { getCookiesTheme } from "./loadCookieTheme";
import { Kanit, Dosis } from "next/font/google";

interface ColorModeContextType {
  toggleColorMode: () => void;
}

const kanitFont = Kanit({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
});

const dosisFont = Dosis({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const themeSettings = (mode: PaletteMode): ThemeOptions => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              light: alpha(colors.primary[500], 0.2),
              main: colors.primary[500],
              dark: colors.primary[600],
            },
            secondary: {
              light: alpha(colors.secondary[500], 0.2),
              main: colors.secondary[500],
              dark: colors.secondary[600],
            },
            background: {
              default: colors.white[500],
            },
            text: {
              primary: colors.white[500],
              secondary: colors.black[500],
            }
          }
        : {
            primary: {
              light: alpha(colors.primary[500], 0.2),
              main: alpha(colors.primary[500], 0.8),
              dark: colors.primary[600],
            },
            secondary: {
              light: alpha(colors.secondary[500], 0.2),
              main: alpha(colors.secondary[500], 0.8),
              dark: colors.secondary[700],
            },
            background: {
              default: colors.black[500],
            },
            text: {
              primary: colors.black[500],
              secondary: colors.white[500],
            }
          }),
    },
    typography: {
      fontFamily: dosisFont.style.fontFamily,
      fontSize: 16,
      h1: {
        fontFamily: kanitFont.style.fontFamily,
        fontSize: 44,
      },
      h2: {
        fontFamily: dosisFont.style.fontFamily,
        fontSize: 32,
      },
      h3: {
        fontFamily: dosisFont.style.fontFamily,
        fontSize: 24,
      },
      h4: {
        fontFamily: dosisFont.style.fontFamily,
        fontSize: 20,
      },
      h5: {
        fontFamily: dosisFont.style.fontFamily,
        fontSize: 14,
      },
      h6: {
        fontFamily: dosisFont.style.fontFamily,
        fontSize: 10,
      },
    },
  };
};

export const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, ColorModeContextType] => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  // React.useEffect(() => {
  //   setMode(getCookiesTheme());
  // }, []);

  const colorMode: ColorModeContextType = React.useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: Theme = React.useMemo(
    () => createTheme(themeSettings(mode)),
    [mode]
  );

  return [theme, colorMode];
};
