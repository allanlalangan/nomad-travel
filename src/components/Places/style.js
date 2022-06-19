const style = {
  heading: {
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    height: '2rem',
    position: 'absolute',
    zIndex: 2000,
    backgroundColor: (theme) => theme.palette.background.default,
  },

  placesList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    marginTop: '1rem',
    overflowY: 'scroll',
    overFlowX: 'hidden',

    zIndex: 1,
    padding: '0 1rem',
  },
};

export default style;
