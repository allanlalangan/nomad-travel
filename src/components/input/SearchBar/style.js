import { withTheme } from '@emotion/react';
import { alpha } from '@mui/material';

const style = {
  container: {
    width: '25%',
    height: '100%',
    padding: '0 1rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    '& .MuiInputBase-input': {
      color: (theme) => theme.palette.primary.dark,
      borderRadius: 1,
      backgroundColor: (theme) => alpha(theme.palette.background.default, 0.75),
    },
    '&.MuiOutlinedInput-notchedOutline': {
      color: 'orange',
    },
  },
};

export default style;
