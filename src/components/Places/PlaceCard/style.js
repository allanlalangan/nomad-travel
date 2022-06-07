const style = {
  placeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 0',
    height: 'calc(100% - 2rem)',

    position: 'relative',

    boxShadow: (theme) => theme.shadows[3],

    borderRadius: 2,
  },

  imageContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -99,
    boxShadow: (theme) => theme.shadows[1],
    borderRadius: 2,
  },

  placeImage: {
    borderRadius: 2,
    width: '100%',
    height: '100%',
    // objectFit: 'cover',
    zIndex: -99,
  },

  placeHeading: {
    color: 'white',

    width: '100%',
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
    width: '100%',
    padding: '1rem',
    display: 'flex',
  },

  contactInfo: {
    color: 'white',
    position: 'absolute',
    bottom: '100%',
    width: '100%',
    marginLeft: '-1rem',
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
    overflowX: 'hidden',
    // padding: 0,
  },

  entryText: {
    padding: '0 1rem',
  },

  placeSummary: {
    height: '50%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',

    padding: '1rem',
    position: 'relative',
  },

  summaryCustomers: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  summaryAddress: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
  },

  tagsList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'scroll',

    width: '100%',
    height: '40%',
  },
};

export default style;
