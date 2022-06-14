import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    contrastThreshold: 5,
    primary: {
      main: 'hsl(205, 25%, 40%)',
    },
    secondary: {
      main: 'hsl(15, 80%, 80%)',
    },
    tertiary: {
      main: 'hsl(195, 50%, 75%)',
      // main: 'hsl(195, 50%, 50%)',
      // dark: 'hsl(195, 50%, 25%)',
    },
    background: {
      default: 'hsl(200, 45%, 93%)',
      dark: 'hsl(205, 35%, 15%)',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
    },
  },
  typography: {
    fontSize: 12,
    button2: {
      margin: 0,
      fontFamily: 'Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  layout: {
    appBarHeight: 8,
  },
});

export default theme;
