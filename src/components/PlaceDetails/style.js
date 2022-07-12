const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: (theme) => theme.palette.background.default,
    width: '100%',
    height: '100%',
    // padding: '1.5rem',
    borderRadius: 2,

    position: 'absolute',
  },

  section: {
    // border: (theme) => `1px solid ${theme.palette.grey['300']}`,
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 1,

    boxShadow: (theme) => theme.shadows[1],
  },

  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    // display: 'flex',
    height: '100%',
    // width: '100%',
    objectFit: 'cover',
  },

  contactInfoEntry: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },

  entryText: {
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 1rem',
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
