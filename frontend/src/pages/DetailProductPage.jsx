import React from 'react'
import Navbars from '../components/header/Navbars'
import ProductDetails from '../components/detailproduct/ProductDetails'
import { Box } from '@mui/material'

const DetailProductPage = () => {
  return (
    <>
        <Box display={{ md:'block', xs:'none' }}>
          <Navbars/>
        </Box>
        <ProductDetails/>
    </>
  )
}

export default DetailProductPage