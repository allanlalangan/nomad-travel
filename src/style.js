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
    position: 'relative',
  },

  places: {
    display: { xs: 'block', sm: 'flex' },
    flexDirection: 'column',
    position: { xs: 'absolute', sm: 'relative' },
    top: { xs: '100%', sm: 0 },
    width: { xs: '100%', sm: '40%', lg: '30%' },
    zIndex: 1000,
    boxShadow: (theme) => theme.shadows[8],
    overFlowX: 'hidden',
    backgroundColor: (theme) => theme.palette.background.default,
  },

  map: {
    width: { xs: '100%', sm: '60%', lg: '70%' },
    height: { xs: '80vh', sm: '100%' },
  },
};

export default style;
