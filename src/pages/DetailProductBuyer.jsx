import { Box } from '@mui/material'
import React from 'react'
import ProductDetails from '../components/detailproduct/ProductDetails'
import ProductInterest from '../components/detailproduct/ProductInterest'
import Navbars from '../components/header/Navbars'

const DetailProductBuyer = () => {
  return (
    <>
        <Box display={{ md:'block', xs:'none' }}>
          <Navbars/>
        </Box>
        <ProductDetails status={'buyer'}/>
    </>
  )
}

export default DetailProductBuyer