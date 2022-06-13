import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import style from './style';

export default function SortButton() {
  const [sortOrder, setSortOrder] = useState('descending');
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchor(null);
  };

  const handleSelect = (e) => {
    setSortOrder(e.target.textContent.toLowerCase());
    setAnchor(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} sx={style.sortByButton}>
        {(sortOrder === 'descending' && <FilterList />) ||
          (sortOrder === 'ascending' && (
            <FilterList sx={{ transform: 'rotate(180deg)' }} />
          ))}
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem value='descending' onClick={handleSelect}>
          Descending
        </MenuItem>
        <MenuItem value='ascending' onClick={handleSelect}>
          Ascending
        </MenuItem>
      </Menu>
    </>
  );
}
