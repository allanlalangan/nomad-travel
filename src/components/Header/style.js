const style = {
  appBar: {
    width: '100%',
    height: (theme) => `${theme.layout.appBarHeight}vh`,
    backgroundColor: (theme) => theme.palette.background.appBar,
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

  mainTitle: {
    width: '100%',
    fontFamily: 'Righteous',
    fontSize: (theme) => `calc((${theme.layout.appBarHeight}vh) - 1rem)`,
    fontWeight: '700',
    lineHeight: '1',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    zIndex: '0',

    color: (theme) => theme.palette.secondary.main,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
  },
};

export default style;
