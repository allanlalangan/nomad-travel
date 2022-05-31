import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { Box, Button, TextField } from '@mui/material';
import style from './style';

const SearchBar = () => {
  return (
    <Box className={styles.container}>
      <TextField size='small' id='search' label='Search' variant='outlined' />
    </Box>
  );
};
export default SearchBar;
