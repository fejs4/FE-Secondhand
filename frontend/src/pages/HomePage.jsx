import React from 'react'
import Banner from '../components/header/Banner'
import Navbars from '../components/header/navbar/Navbars'
import Products from '../components/products/main/Products'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchUser } from '../redux/product';

const HomePage = () => {
  const dispatch = useDispatch()

  const product = useSelector(state => state.product.products)
    console.log(product);

  React.useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <Navbars />
      <Banner />
      <Products />
    </>
  )
}

export default HomePage