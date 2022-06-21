import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: 'hsl(205, 25%, 40%)',
    },
    secondary: {
      main: 'hsl(15, 80%, 80%)',
    },
    tertiary: {
      main: 'hsl(195, 50%, 75%)',
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
      styleOverrides: {
        root: { minHeight: 0 },
      },
    },
  },
  typography: {
    fontSize: 12,
    // custom variant
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
    appBar: { xs: { width: 100, height: 8 }, sm: {}, md: {}, lg: {}, xl: {} },
    placesHeading: {
      xs: { width: 100, height: 4 },
      sm: { width: 100, height: 2 },
      md: {},
      lg: {},
      xl: {},
    },
  },
});

export default theme;
