const style = {
  wrapper: {
    width: '100vw',
    display: 'flex',
    backgroundColor: (theme) => theme.palette.background.default,
  },
  mainContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: (theme) => `calc(100vh - ${theme.layout.appBarHeight}vh)`,
    marginTop: (theme) => `${theme.layout.appBarHeight}vh`,
  },

  places: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '25%',
    zIndex: 1000,
    boxShadow: (theme) => theme.shadows[8],
  },

  map: {
    width: '75%',
    height: '100%',
  },
};

export default style;
