import { Box, Fab, Typography } from '@mui/material'
import React from 'react'
import FilterCategory from './FilterCategory'
import FloatingButton from './FloatingButton'
import ItemCard from './ItemCard'
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Box sx={{ mx: { lg: 15, md: 15, sm: 7, xs: 5 }, mt: { xs: 20, md: 'unset' } }}>
      <Typography variant='h5' fontWeight={700} sx={{ fontSize: { xs: '1em', md: '2em' } }}>
        Telusuri Kategori
      </Typography>
      <FilterCategory />
      <ItemCard />
      <Link to='/detail-product-seller/1'>
        <Box display={'flex'} justifyContent={'center'}>
          <FloatingButton />
        </Box>
      </Link>
    </Box>
  )
}

export default Products