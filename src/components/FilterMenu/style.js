const style = {
  filterMenu: {
    width: '100%',
    height: (theme) => `calc((100vh - ${theme.layout.appBarHeight}vh) - 2rem)`,
    position: 'absolute',
    // left: 'calc(100% + 1rem)',
    top: '1rem',
    overflowY: 'scroll',
  },
};

export default style;
