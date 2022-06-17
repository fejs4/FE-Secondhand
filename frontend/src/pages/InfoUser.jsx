import React from 'react'
import Navbars from '../components/header/Navbars'
import FormUser from '../components/products/FormUser'

const InfoUser = () => {
  return  (
    <>
      <Navbars info={'Lengkapi Info Akun'}/>
      <FormUser/>
    </>
  )
}

export default InfoUser