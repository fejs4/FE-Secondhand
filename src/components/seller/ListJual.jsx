import { Box, Grid } from '@mui/material'
import React from 'react'
import CategoryJual from './CategoryJual'
import CategoryJualSwiper from './CategoryJualSwiper'
import ListProductJual from './ListProductJual'

const ListJual = () => {
  return (
    <Box sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 }, my: 3 }} >
      <Grid container>
        <Grid display={{ xs: 'none', md:'block' }} xl={3} md={4}  pr={2} >
          <CategoryJual /> 
        </Grid>
        <Grid display={{ xs: 'block', md:'none' }} xs={12} mb={2} >
          <CategoryJualSwiper/>
        </Grid>
        <Grid xs={12} md={8} xl={9} >
          <ListProductJual/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ListJual