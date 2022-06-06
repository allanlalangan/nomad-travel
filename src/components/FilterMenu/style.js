const style = {
  filterMenu: {
    padding: '1rem',
    width: '100%',
    height: (theme) => `calc((100vh - ${theme.layout.appBarHeight}vh) - 2rem)`,
    position: 'absolute',
    left: 'calc(100% + 1rem)',
    top: '1rem',
    overflowY: 'scroll',
    backgroundColor: (theme) => theme.palette.background.default,
    zIndex: 1000,
    borderRadius: '0 0.5rem 0.5rem 0.5rem',
    boxShadow: (theme) => theme.shadows[3],
  },

  categorySelect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // width: `calc(100% - 2rem)`,
  },

  sortByButton: {},

  filterButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterField: {
    width: '100%',
  },

  checkboxLiItem: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
  checkboxLabel: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
};

export default style;
