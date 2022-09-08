const style = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    // height: (theme) => `${theme.layout.placesHeading.sm.height}rem`,
    height: '2rem',

    position: { xs: 'fixed', sm: 'static' },
    top: (theme) => ({ xs: `${theme.layout.appBar.xs.height}vh` }),

    zIndex: 20,
    backgroundColor: (theme) => theme.palette.background.default,
  },

  heading: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'capitalize',
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  placesList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflowY: 'scroll',
    overFlowX: 'hidden',
    boxSizing: 'border-box',
    zIndex: 1,
    padding: '0 1rem',
  },

  filterButton: {
    '&.MuiButtonBase-root': {
      borderRadius: '0 0 0 0.5rem',
    },
  },

  buttonText: {
    letterSpacing: '1px',
    fontWeight: 600,
  },
};

export default style;
