import { alpha } from '@mui/material';
const style = {
  drawer: {
    '& .MuiPaper-root': {
      width: { width: '100%', sm: '50%', md: '30%' },
      // width: '100%',
      marginTop: (theme) => `${theme.layout.appBarHeight}vh`,
      height: (theme) => `calc(100vh - ${theme.layout.appBarHeight}vh)`,
      backgroundColor: (theme) => alpha(theme.palette.background.default, 0.7),
    },
  },
  placesList: {
    // overflowY: 'scroll',
    height: '100%',
    zIndex: 1,
    padding: '0 1rem',
  },
};

export default style;
