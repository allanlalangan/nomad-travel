import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 600,
      md: 900,
      lg: 1280,
    },
  },
  palette: {
    primary: {
      main: 'hsl(195, 50%, 75%)',
    },
    secondary: {
      main: 'hsl(10, 100%, 75%)',
    },
    background: {
      default: 'hsl(200, 45%, 93%)',
      appBar: 'hsl(205, 25%, 20%)',
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
    fontFamily: 'Raleway',
    fontSize: '11',
  },
  layout: {
    appBarHeight: 8,
  },
});

export default theme;
