import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, Select, Typography } from '@mui/material';
import useStyles from 'components/styles';

export default function SearchBox() {
  const [category, updateCategory] = React.useState('');
  const { classes } = useStyles();
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '20px'
      }}
    >
      <IconButton
        sx={{
          p: 0
        }}
        aria-label="menu"
      >
        <Select
          value={category}
          onChange={(e) => updateCategory(e.target.value)}
          displayEmpty
          inputProps={{
            'aria-label': 'Without label',
            className: classes.inputClass
          }}
          variant="standard"
          MenuProps={{
            className: classes.inputClass
          }}
          className={classes.select}
          sx={{
            ':before': {
              border: 'none',
              borderBottomWidth: '0 !important'
            }
          }}
        >
          <MenuItem value="">
            <Typography>Category</Typography>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
