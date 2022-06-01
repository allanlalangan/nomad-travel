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
    justifyContent: 'center',
    padding: '1rem',
  },

  summaryCustomers: {
    display: 'flex',
    flexDirection: 'column',
  },

  summaryAddress: {
    display: 'flex',
    flexDirection: 'column',
  },

  tagsList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  summaryTags: {
    width: '100%',
    overflowY: 'scroll',
  },
};

export default style;
