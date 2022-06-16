import { Box, Grid } from '@mui/material'
import React from 'react'
import DescriptionProduct from './DescriptionProduct'
import ProductImage from './ProductImage'
import SellerInfo from './SellerInfo'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import PublishSeller from './PublishSeller'
import PublishBuyer from './PublishBuyer'

const ProductDetails = ({productInfo, productInterest}) => {
  return (
    <>
      <Box sx={{ mx: { xl: 15, md: 15, sm: 0 }, mt: { md: 5, xs: 0 } }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, md: 3 }} justifyContent={'center'} position={'relative'}>
          <Box display={{ sm: 'block', md: 'none' }} mt={{ sm: 5, xs: 5 }}>
            <ArrowBackSharpIcon sx={{
              fontSize:{sm:'2.5rem', xs:'2rem'}, zIndex: 10, padding: 1, position: 'absolute',borderRadius:'50px', background: 'white', left:'4rem', cursor: 'pointer', '&:hover': {
                backgroundColor: '#aaa',
                opacity: [0.9, 0.8, 0.7],
              }
            }} />
          </Box>
          <Grid item xl={6} md={8} xs={12} >
            <ProductImage />
            <Box component={'div'} p={4} mt={3} display={{ md: 'block', xs: 'none' }} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
              <DescriptionProduct />
            </Box>
          </Grid>
          <Grid item xl={4} md={4} xs={12} mx={{ md: 'unset', xs:3 }}  >
            {productInfo? productInfo : productInterest }
            <SellerInfo />
            <Box component={'div'} p={4} mt={3} display={{ md: 'none', xs: 'block' }} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
              <DescriptionProduct />
            </Box>
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent={'center'}>
              {productInfo ? <PublishSeller/> : <PublishBuyer/> }
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductDetails