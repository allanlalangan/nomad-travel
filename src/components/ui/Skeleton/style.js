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

  skeletonImage: {
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    width: '100%',
    height: 200,
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

  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '0 1rem 1rem 1rem',
  },
  __booking__actionText: { fontWeight: 500 },
  cardActionButton__text: { fontWeight: 600 },
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
