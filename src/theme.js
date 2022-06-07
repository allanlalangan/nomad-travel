import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
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
      default: 'hsl(190, 50%, 95%)',
      appBar: 'hsl(205, 60%, 20%)',
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
    fontFamily: 'Barlow',
    fontSize: 12,
  },
  layout: {
    appBarHeight: 8,
  },
});

export default theme;
