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

    minHeight: (theme) => ({
      xs: '100%',
      md: `calc((100vh - ${theme.layout.appBar.xs.height}vh) - ${
        theme.layout.placesHeading.sm.height * 2
      }rem)`,
    }),

    // minHeight: (theme) =>
    //   `calc((100vh - ${theme.layout.appBar.xs.height}vh) - ${
    //     theme.layout.placesHeading.xs.height * 2
    //   }rem)`,

    boxShadow: (theme) => theme.shadows[3],
    borderRadius: 2,
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
    height: '50%',

    boxShadow: (theme) => theme.shadows[2],
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  placeImage: {
    display: 'flex',
    height: '100%',
    // width: '100%',
    zIndex: -99,
    objectFit: 'cover',

    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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

    // height: '35%',
    padding: '0 1rem',

    overflowY: 'scroll',
  },

  summaryCustomers: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '.5rem 0',
  },

  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '.5rem',
  },

  totalReviews: {},

  summaryAddress: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  addressStreet: {
    paddingBottom: '.5rem',
  },

  summaryLists: {
    __tags: {
      flexWrap: 'wrap',
    },
    __diets: {
      flexWrap: 'wrap',
    },
  },

  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '0 1rem 1rem 1rem',
  },
  __booking: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '.5rem',

    '& .MuiButton-root:hover': {
      color: '#fff',
    },
    '& .MuiButton-root:hover .MuiTypography-root': {
      textDecoration: 'underline',
    },
  },

  tripAdvisorLink: { display: 'flex', marginTop: '.5rem' },
};

export default style;
