import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1280,
    },
  },
  palette: {
    secondary: {
      main: 'hsl(10, 100%, 75%)',
    },
    background: {
      default: 'hsl(190, 50%, 95%)',
      appBar: 'hsl(205, 50%, 15%)',
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
