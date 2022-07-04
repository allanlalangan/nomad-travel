const style = {
  drawer: {
    '& .MuiPaper-root': {
      '&.MuiDrawer-paper': {
        height: (theme) => ({
          // xs: `calc((((100vh - ${theme.layout.appBar.xs.height}vh) - 2rem) * .85) - 2rem)`,
          xs: `calc((100vh - ${theme.layout.appBar.xs.height}vh) - 2rem)`,
        }),
        width: {
          xs: '100%',
          sm: 'calc(50% - 2rem)',
          md: 'calc(40% - 2rem)',
          lg: 'calc(30% - 2rem)',
        },
        overflow: 'visible',

        // zIndex: { xs: 1000, sm: 600 },
        top: (theme) => ({
          xs: `calc(${theme.layout.appBar.xs.height}vh + ${theme.layout.placesHeading.sm.height}rem)`,
          sm: `calc(${theme.layout.appBar.xs.height}vh + 1rem)`,
        }),
        left: {
          sm: 'calc(50% + 1rem)',
          md: 'calc(45% + 1rem)',
          lg: 'calc(30% + 1rem)',
        },
        backgroundColor: 'transparent',
        border: 'none',
      },
    },
  },
};

export default style;
