import React from 'react'
import Navbars from '../components/header/Navbars'
import ProductDetails from '../components/detailproduct/ProductDetails'
import { Box } from '@mui/material'
import ProductInfo from '../components/detailproduct/ProductInfo'
import SellerInfo from '../components/detailproduct/SellerInfo'
import DataPenawar from '../components/seller/DataPenawar'


const InfoPenawar = () => {
    return (
      <>
          <Navbars info={'Info Penawar'}/>
          <DataPenawar/>
      </>
    )
  }
  
  export default InfoPenawar
  