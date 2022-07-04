const style = {
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9998,
  },

  window: {
    position: 'absolute',
    top: (theme) => `calc((${theme.layout.appBar.xs.height}vh) + 1rem)`,
    left: '1rem',
    width: 'calc(100% - 2rem)',
    height: (theme) =>
      `calc((100vh - ${theme.layout.appBar.xs.height}vh) - 2rem)`,
    zIndex: 9999,
  },
};

export default style;
