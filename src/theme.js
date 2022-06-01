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
    // Name of the component
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
  },
  layout: {
    appBarHeight: 8,
  },
});

export default theme;
