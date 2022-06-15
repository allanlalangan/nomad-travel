import { alpha } from '@mui/material';

const style = {
  filterMenu: {
    display: { xs: 'none', lg: 'block' },

    width: 'calc(100% - 80%)',
    height: 'calc(100% - 2rem)',

    position: 'absolute',
    left: 'calc(30% + 1rem)',
    top: '1rem',
    zIndex: 1000,

    borderRadius: '0 0.5rem 0.5rem 0.5rem',
    backgroundColor: (theme) => alpha(theme.palette.background.default, 0.75),
    boxShadow: (theme) => theme.shadows[3],
  },

  filterHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '100%',
    height: '25%',
    zIndex: 999,

    padding: '1rem',
    backgroundColor: (theme) => theme.palette.background.default,
    boxShadow: (theme) => theme.shadows[1],
    borderRadius: 2,
    borderTopLeftRadius: 0,
  },

  filterForm: {
    width: 'calc(100% - 2rem)',
    height: 'calc(75% - 2rem)',
    marginTop: '1rem',
    padding: '0 1rem',

    overflowY: 'scroll',
    borderRadius: 2,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,

    backgroundColor: (theme) => theme.palette.background.default,
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

  checkboxLabel: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
};

export default style;
