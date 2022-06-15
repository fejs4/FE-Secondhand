import { FormControl, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  return (
    <>
      <FormControl>
        <TextField
          id="search"
          placeholder="Cari di sini ..."
          fullWidth
          variant="standard"
          sx={{ ml: 3, width: '100%', minWidth: { xs: '100%', md: '380px' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
            style: {
              color: '#000',
              fontSize: '1rem',
              padding: '.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: '#f5f5f5',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              }
            }
          }}
        />
      </FormControl>
    </>
  )
}

export default SearchField