import { Box, Checkbox, ThemeProvider } from "@mui/material";
import theme from "constants/color-palette";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="span"
        sx={{
          width: 300,
          height: 300,
          fontFamily: theme.typography.fontFamily, // Use theme.typography.fontFamily
          backgroundColor: theme.palette.secondary.light, // Use theme.palette.secondary.light
          '&:hover': {
            backgroundColor: theme.palette.primary.main, // Use theme.palette.primary.main
            opacity: [0.9, 0.8, 0.7],
          },  
        }}
      >
        <p>hello world</p>
      </Box>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
