const style = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    backgroundColor: (theme) => theme.palette.background.default,
  },
  mainContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: (theme) => `calc(100% - ${theme.layout.appBarHeight}%)`,
    marginTop: (theme) => `${theme.layout.appBarHeight}vh`,
  },

  places: {
    display: { xs: 'none', md: 'flex' },
    flexDirection: 'column',
    position: 'relative',
    width: '30%',
    zIndex: 1000,
    boxShadow: (theme) => theme.shadows[8],
    overFlowX: 'hidden',
  },

  map: {
    width: { sm: '100%', md: '70%' },
    height: '100%',
  },
};

export default style;
