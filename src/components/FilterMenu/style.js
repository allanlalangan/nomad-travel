const style = {
  filterMenu: {
    width: '100%',
    height: (theme) => `calc((100vh - ${theme.layout.appBarHeight}vh) - 2rem)`,
    position: 'absolute',
    left: 'calc(100% + 1rem)',
    top: '1rem',
    // overflowY: 'scroll',
    backgroundColor: (theme) => theme.palette.background.default,
    zIndex: 1000,
    borderRadius: '0 0.5rem 0.5rem 0.5rem',
    boxShadow: (theme) => theme.shadows[3],
  },

  filterHeader: {
    width: '25%',
    position: 'fixed',
    height: (theme) =>
      `calc(((100vh - ${theme.layout.appBarHeight}vh) - 2rem) * .25)`,
    padding: '1rem',

    backgroundColor: (theme) => theme.palette.background.default,
    boxShadow: (theme) => theme.shadows[1],
    borderRadius: 2,
    borderTopLeftRadius: 0,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },

  filterForm: {
    height: (theme) =>
      `calc((((100vh - ${theme.layout.appBarHeight}vh) - 2rem) * .75) - 1rem)`,
    marginTop: (theme) =>
      `calc(((100vh - ${theme.layout.appBarHeight}vh) - 2rem) * .25)`,
    marginBottom: '1rem',
    overflowY: 'scroll',
    padding: '0 1rem',
    paddingTop: '1rem',
  },

  categorySelect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // width: `calc(100% - 2rem)`,
  },

  categorySelectInput: {
    '& .MuiOutlinedInput-root:hover': {
      '& > fieldset': {
        borderColor: (theme) => theme.palette.secondary.light,
      },
    },
  },

  ratingField: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem 1rem 1rem',
  },

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
