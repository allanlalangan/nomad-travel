const mainContentHeight = (theme) =>
  `calc(100vh - ${theme.layout.appBar.xs.height}vh)`;

const style = {
  wrapper: {
    display: 'flex',

    width: '100vw',
    height: '100vh',

    backgroundColor: (theme) => theme.palette.background.default,
  },

  mainContent: {
    display: 'flex',
    justifyContent: 'space-evenly',

    position: 'relative',
    width: '100%',
    height: (theme) => ({
      xs: mainContentHeight(theme),
    }),

    marginTop: (theme) => `${theme.layout.appBar.xs.height}vh`,
  },

  places: {
    display: { xs: 'block', sm: 'flex' },
    flexDirection: 'column',

    position: { xs: 'absolute', sm: 'relative' },
    top: { xs: '100%', sm: 0 },
    width: { xs: '100%', sm: '50%', lg: '30%' },

    zIndex: 1000,
    overFlowX: 'hidden',
    boxShadow: (theme) => theme.shadows[8],
    backgroundColor: (theme) => theme.palette.background.default,
  },

  map: {
    display: 'flex',
    alignItems: 'start',

    width: { xs: '100%', sm: '50%', md: '60%', lg: '70%' },
    height: { xs: '100%', sm: '100%' },
  },
};

export default style;
