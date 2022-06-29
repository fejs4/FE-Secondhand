import { FormControl, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const SearchField = () => {
  const [Search, setSearch] = React.useState('');
  const location = useLocation().pathname
  const {id} = useParams()
  console.log(location === `/detail-product-seller/${id}`)
  const navigate = useNavigate()
  const handleKeyDown = async (e) =>{
    if (e.key === 'Enter') {
        navigate('/')
        const search = await axios.get(`https://be-kel1.herokuapp.com/product?search=${Search}`).then(data => console.log(data.data.data.filtered))
    }
  }
  return (
    <>
      <FormControl>
        <TextField
          onKeyDown={handleKeyDown}
          onChange= {(e) => setSearch(e.target.value)}
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