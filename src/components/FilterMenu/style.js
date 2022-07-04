import { alpha } from '@mui/material';

const style = {
  filterMenu: {
    display: 'flex',
    flexDirection: 'column',
    // display: { xs: 'none', lg: 'block' },

    width: '100%',
    height: '100%',
    // width: 'calc(100% - 80%)',
    // height: 'calc(100% - 2rem)',

    // position: 'absolute',
    // left: 'calc(30% + 1rem)',
    top: '1rem',
    zIndex: 1000,

    borderRadius: (theme) => ({
      sm: '0 0.5rem 0.5rem 0.5rem',
    }),
    // borderRadius: '0 0.5rem 0.5rem 0.5rem',
    backgroundColor: (theme) => alpha(theme.palette.background.default, 0.75),
    boxShadow: (theme) => theme.shadows[3],
  },

  filterHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    // height: { xs: '35%', sm: '25%' },
    zIndex: 999,

    padding: '1rem',
    backgroundColor: (theme) => theme.palette.background.default,
    boxShadow: (theme) => theme.shadows[1],
    borderRadius: { xs: 0, sm: 2 },
    borderTopLeftRadius: { xs: 0, sm: 0 },
  },

  filterButton: {
    position: 'absolute',
    left: '30%',
    zIndex: 2000,
  },

  filterForm: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 2rem)',
    height: 'calc(100% - 2rem)',
    // height: { xs: 'calc(65% - 2rem)', sm: 'calc(75% - 2rem)' },

    padding: '0 1rem',
    margin: '1rem',

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
    paddingTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clearFilterButton: {
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
  },
  filterField: {
    width: '100%',
  },

  checkboxLiItem: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
};

export default style;
