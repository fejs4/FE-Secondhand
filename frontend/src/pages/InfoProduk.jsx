import React from 'react'
import NavbarAddProduct from '../components/header/NavbarAddProduct'
import Navbars from '../components/header/Navbars'
import FormProduct from '../components/products/FormProduct'

const InfoProduk = () => {
  return (
    <>
      <Navbars info={'Lengkapi Detail Produk'}/>
      <FormProduct/>
    </>
  )
}

export default InfoProduk