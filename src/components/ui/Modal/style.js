const style = {
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9998,
  },

  window: {
    position: 'absolute',
    top: (theme) => ({
      xs: 0,
      sm: `calc((${theme.layout.appBar.xs.height}vh) + 1rem)`,
    }),
    left: { sm: '1rem', lg: 'calc(30% + 1rem)' },
    width: { xs: '100%', sm: 'calc(100% - 2rem)', lg: 'calc(70% - 2rem)' },
    height: (theme) => ({
      xs: '100%',
      sm: `calc((100vh - ${theme.layout.appBar.xs.height}vh) - 2rem)`,
    }),
    zIndex: 9999,
    borderRadius: 2,
  },
};

export default style;
