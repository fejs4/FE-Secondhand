import axios from 'axios'
import React from 'react'
import Banner from '../components/header/Banner'
import Navbars from '../components/header/navbar/Navbars'
import Products from '../components/products/main/Products'

const HomePage = () => {
  const getData = async() =>{
    await axios.get(`http://localhost:5000/products`).then(res => console.log(res))
  }
  React.useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Navbars />
      <Banner />
      <Products />
    </>
  )
}

export default HomePage