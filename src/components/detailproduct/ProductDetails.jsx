import { Box, Fab, Grid, Typography } from '@mui/material'
import React from 'react'
import DescriptionProduct from './DescriptionProduct'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import SellerInfo from './SellerInfo'

const ProductDetails = () => {
  return (
    <>
      <Box sx={{ mx: { xl: 20, md: 15, sm: 8, xs: 5 }, mt: 5 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, md: 3 }} justifyContent={'center'}>
          <Grid item md={8} xs={12} >
            <ProductImage />
            <Box component={'div'} p={4} mt={3} display={{ md: 'block', xs: 'none' }} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
              <DescriptionProduct />
            </Box>
          </Grid>
          <Grid item md={4} xs={12} >
            <ProductInfo />
            <SellerInfo />
            <Box component={'div'} p={4} mt={3} display={{ md: 'none', xs: 'block' }} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
              <DescriptionProduct />
            </Box>
            <Box display={{ xs:'flex', md:'none' }} justifyContent={'center'}>
              <Fab color="primary" aria-label="add" sx={{ position: 'fixed', width: '328px', height: '60px', borderRadius: '12px', top: '90%' }}>
                 Terbitkan
              </Fab>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductDetails