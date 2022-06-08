import { alpha } from '@mui/material';

const style = {
  appBar: {
    width: '100%',
    height: (theme) => `${theme.layout.appBarHeight}%`,
    backgroundColor: (theme) => theme.palette.background.appBar,
    // backgroundColor: (theme) => theme.palette.primary.light,
  },
  toolBar: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: '25%',
    // minHeight: '100%',
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
    fontFamily: 'Righteous',
    // fontSize: (theme) => `calc((${theme.layout.appBarHeight}vh) - 1rem)`,
    fontSize: 45,
    fontWeight: '700',
    // lineHeight: '1',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    zIndex: '0',

    color: (theme) => theme.palette.secondary.main,

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
      color: (theme) => theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export default style;
