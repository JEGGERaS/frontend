import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography:{
    fontFamily: 'Dosis, sans-serif'
  },
  palette: {
    primary: {
      main: '#F3CB41',
    },
    secondary: {
      main: '#4169F3',
    },
  },
});

export default theme;