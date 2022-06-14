import { alpha } from '@mui/material';

const style = {
  filterMenu: {
    display: { xs: 'none', sm: 'block' },
    width: 'calc(100% - 30%)',
    height: (theme) => `calc((100vh - ${theme.layout.appBarHeight}vh) - 2rem)`,
    position: 'absolute',
    left: 'calc(100% + 1rem)',
    top: '1rem',
    // overflowY: 'scroll',
    backgroundColor: (theme) => alpha(theme.palette.background.default, 0.75),
    zIndex: 1000,
    borderRadius: '0 0.5rem 0.5rem 0.5rem',
    boxShadow: (theme) => theme.shadows[3],
  },

  filterHeader: {
    width: '100%',

    position: 'absolute',
    top: 0,
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    backgroundColor: (theme) => theme.palette.background.default,
    boxShadow: (theme) => theme.shadows[1],
    borderRadius: 2,
    borderTopLeftRadius: 0,

    padding: '1rem',
  },

  filterForm: {
    height: (theme) =>
      `calc((((100vh - ${theme.layout.appBarHeight}vh) - 2rem) * .75) - 1rem)`,
    marginTop: (theme) =>
      `calc(((100vh - ${theme.layout.appBarHeight}vh) - 2rem) * .25)`,
    marginBottom: '1rem',
    overflowY: 'scroll',
    padding: '0 1rem',
    // paddingTop: '1rem',
  },

  categorySelect: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  },

  filterButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  applyFilterButton: {
    '&.MuiButton-root': {
      color: (theme) => theme.palette.tertiary.light,
      // backgroundColor: (theme) => theme.palette.primary.main,
    },
    '&.MuiButton-root:hover': {
      // color: (theme) => theme.palette.primary.dark,
      backgroundColor: (theme) => theme.palette.primary.light,
    },
  },

  fieldContainer: {
    backgroundColor: (theme) => theme.palette.background.default,
    // margin: '',
  },
  checkboxLabel: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
};

export default style;
