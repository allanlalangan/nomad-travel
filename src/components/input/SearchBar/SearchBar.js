import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { Box, Button, TextField } from '@mui/material';
import style from './style';

const SearchBar = () => {
  return (
    <Box sx={style.container}>
      <TextField
        // InputProps={{ sx: style.textField }}
        sx={style.textField}
        size='small'
        id='search'
        label='Search'
        InputLabelProps={{ sx: style.label }}
        variant='filled'
      />
    </Box>
  );
};
export default SearchBar;
