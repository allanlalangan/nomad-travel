const style = {
  placeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 0',
    height: 'calc(100% - 2rem)',

    position: 'relative',

    boxShadow: (theme) => theme.shadows[2],

    borderRadius: 1,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: -1,
  },

  placeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0.5rem 0.5rem 0 0',
  },

  placeHeading: {
    width: '100%',
    /* height: 25%, */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '1rem',
    zIndex: 100,
  },

  placeSummary: {
    height: '50%',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: '1rem',
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
