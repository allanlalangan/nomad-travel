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

    // minHeight: (theme) => ({
    //   xs: '100%',
    //   md: `calc((100vh - ${theme.layout.appBar.xs.height}vh) - ${
    //     theme.layout.placesHeading.sm.height * 2
    //   }rem)`,
    // }),

    height: '50%',

    boxShadow: (theme) => theme.shadows[3],
    borderRadius: 2,
  },

  skeletonRectangle: {
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    width: '100%',
    height: 80,
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
};

export default style;
