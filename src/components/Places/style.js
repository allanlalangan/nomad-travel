const style = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    height: (theme) => `${theme.layout.placesHeading.sm.height}rem`,

    position: { xs: 'fixed', sm: 'static' },
    top: (theme) => ({ xs: `${theme.layout.appBar.xs.height}vh` }),

    zIndex: 2000,
    backgroundColor: (theme) => theme.palette.background.default,
  },

  heading: {
    fontSize: '1rem',
    fontWeight: 400,
    textTransform: 'capitalize',
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  placesList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflowY: 'scroll',
    overFlowX: 'hidden',

    zIndex: 1,
    // padding: '0 1rem 1rem 1rem',
  },
};

export default style;
