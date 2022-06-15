const style = {
  container: {
    width: '25%',
    height: '100%',
    padding: '0 1rem',

    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    '& .MuiInputBase-input': {
      color: 'black',
      borderRadius: 1,
      backgroundColor: (theme) => theme.palette.background.default,
    },
  },
};

export default style;
