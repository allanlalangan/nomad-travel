const style = {
  drawer: {
    '& .MuiPaper-root': {
      '&.MuiDrawer-paper': {
        height: (theme) =>
          `calc((100vh - ${theme.layout.appBar.xs.height}vh) - 2rem)`,
        overflow: 'visible',
        width: '30%',

        zIndex: 600,
        top: (theme) => `calc(${theme.layout.appBar.xs.height}vh + 1rem)`,
        left: 'calc(30% + 1rem)',
        backgroundColor: 'transparent',
      },
    },
  },
};

export default style;
