const style = {
  fullWidth: {
    width: '100%',
  },

  placeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: '1rem',

    boxShadow: (theme) => theme.shadows[3],
    borderRadius: 2,
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
    height: '50%',

    boxShadow: (theme) => theme.shadows[3],
    borderRadius: 2,
  },

  placeImage: {
    display: 'flex',
    height: '100%',
    // width: '100%',
    zIndex: -99,
    objectFit: 'cover',

    borderRadius: 2,
  },

  imageErrorMessage: {
    height: '100%',
  },

  placeHeading: {
    display: 'flex',

    position: 'absolute',
    top: 0,

    color: 'white',
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxShadow: (theme) => theme.shadows[2],
  },

  placeTitle: {
    display: 'flex',
    padding: '1rem',
  },

  contactInfo: {
    position: 'absolute',
    bottom: 0,
    padding: '1rem',

    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    boxShadow: (theme) => theme.shadows[2],
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    height: '35%',
    padding: '0 1rem',

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
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: '.5rem 0',
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
    height: '15%',
    // padding: '0.5rem 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  __booking: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingBottom: '0.5rem',

    '& .MuiButton-root:hover': {
      color: '#fff',
    },
    '& .MuiButton-root:hover .MuiTypography-root': {
      textDecoration: 'underline',
    },
  },

  tripAdvisorLink: { display: 'flex' },
};

export default style;
