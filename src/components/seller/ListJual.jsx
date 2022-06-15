import { Box, Grid } from '@mui/material'
import React from 'react'
import CategoryJual from './CategoryJual'
import ListProductJual from './ListProductJual'

const ListJual = () => {
  return (
    <Box sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 }, my: 3 }} overflow='hidden'>
      <Grid container>
        <Grid xl={3} md={4} display={{ md: 'block', xs: 'none' }} pr={2} >
          <CategoryJual /> 
        </Grid>
        <Grid xs={12} md={8} xl={9} >
          <ListProductJual/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ListJual