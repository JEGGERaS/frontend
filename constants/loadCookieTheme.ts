import { PaletteMode } from "@mui/material";
import { cookies } from "next/headers";

type CookieTheme = () => PaletteMode;

export const getCookiesTheme: CookieTheme = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return theme ? (theme.value === "light" ? "light" : "dark") : "light";
};
