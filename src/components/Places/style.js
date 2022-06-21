const style = {
  heading: {
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    height: (theme) => `${theme.layout.placesHeading.xs.height}rem`,

    zIndex: 2000,
    backgroundColor: (theme) => theme.palette.background.default,
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
