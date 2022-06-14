const style = {
  fullWidth: {
    width: '100%',
  },

  placeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem 0',
    height: 'calc(100% - 2rem)',

    position: 'relative',

    boxShadow: (theme) => theme.shadows[3],

    borderRadius: 2,
    // paddingBottom: '1rem',
  },

  imageContainer: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    boxShadow: (theme) => theme.shadows[3],
    borderRadius: 2,
    position: 'relative',
  },

  placeImage: {
    borderRadius: 2,

    height: '100%',

    zIndex: -99,
  },

  placeHeading: {
    color: 'white',

    position: 'absolute',
    top: 0,
    display: 'flex',

    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxShadow: (theme) => theme.shadows[2],
  },

  placeTitle: {
    padding: '1rem',
    display: 'flex',
  },

  contactInfo: {
    boxShadow: (theme) => theme.shadows[2],
    color: 'white',
    position: 'absolute',
    bottom: 0,
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    borderRadius: 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  contactInfoEntry: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  entryText: {
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 1rem',
  },

  placeSummary: {
    height: '50%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    padding: '0 1rem',
    position: 'relative',
    overflowY: 'scroll',
  },

  summaryCustomers: {
    display: 'flex',
    flexDirection: 'column',

    padding: '.5rem 0',
  },

  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  totalReviews: {},

  summaryAddress: {
    display: 'flex',
    justifyContent: 'space-between',

    padding: '1rem 0',
  },

  summaryLists: {
    __tags: {
      display: 'flex',
      flexDirection: 'column',
    },
    __diets: {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  cardActions: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',

    __booking: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '0.5rem',

      '& .MuiButton-root': {
        textTransform: 'none',
      },
      '& .MuiButton-root:hover': {
        color: '#fff',
      },
      '& .MuiButton-root:hover .MuiTypography-root': {
        textDecoration: 'underline',
      },
    },
  },
};

export default style;
