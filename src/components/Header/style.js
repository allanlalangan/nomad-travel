import { alpha } from '@mui/material';

const style = {
  appBar: {
    width: '100%',
    height: (theme) => `${theme.layout.appBar.xs.height}vh`,
    backgroundColor: (theme) => theme.palette.background.default,
    // backgroundColor: (theme) => theme.palette.primary.light,
    boxShadow: (theme) => theme.shadows[1],

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  toolBar: {
    '&.MuiToolbar-root': {
      minHeight: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: { xs: 'center', sm: 'space-between' },
    },
  },

  logo: {
    width: '30%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeLink: {
    transition: 'all 0.25s ease-in-out',
    '&:hover': {
      filter: 'contrast(125%) saturate(175%) hue-rotate(-10deg)',
    },
  },

  mainTitle: {
    width: '100%',
    fontFamily: '"Righteous", "Roboto", sans-serif',
    // fontSize: (theme) => `calc((${theme.layout.appBarHeight}vh) - 1rem)`,
    fontSize: 45,
    fontWeight: '700',
    // lineHeight: '1',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    zIndex: '0',

    color: (theme) => theme.palette.primary.dark,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
    position: 'relative',
  },

  iconContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: (theme) => alpha(theme.palette.secondary.main, 0),

    '& svg': {
      width: '100%',
      height: '100%',
      transform: 'scale(1.2)',
      position: 'absolute',
      bottom: '0',
      left: '0',
      color: (theme) => theme.palette.secondary.dark,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  searchContainer: {
    // width: '25%',
    position: { xs: 'absolute', sm: 'static' },
    top: (theme) => ({
      xs: `calc(${theme.layout.appBar.xs.height}vh + ${theme.layout.placesHeading.sm.height}rem)`,
    }),
    width: { xs: '35%', md: '25%' },
    height: '100%',
    // padding: '0 1rem',

    display: { xs: 'flex' },
    // display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
  },

  // backgroundColor: (theme) => alpha(theme.palette.background.default, 0.75),
  zIndex: 2,

  searchTextField: {
    // backgroundColor: (theme) => alpha(theme.palette.background.default, 0.75),
    '& .MuiOutlinedInput-root': {
      backgroundColor: (theme) => theme.palette.background.default,
      borderRadius: '2rem',
    },
  },
};

export default style;
