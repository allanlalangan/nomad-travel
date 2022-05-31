const style = {
  mainContent: {
    width: '100vw',
    height: (theme) => `calc(100vh - ${theme.layout.appBarHeight}vh)`,
    marginTop: (theme) => `${theme.layout.appBarHeight}vh`,
  },

  places: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  map: {
    width: '75%',
  },
};

export default style;
