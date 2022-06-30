import { Box, Typography } from '@mui/material'
import React from 'react'
import FilterCategory from '../FilterCategory'
import FloatingButton from '../FloatingButton'
import ItemCard from '../ItemCard'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingWeb } from '../../../redux/product'

const Products = () => {
  const [clicked, setClicked] = React.useState('Semua');
  const userProfile = useSelector(state => state.auth.userProfile)
  const loading = useSelector(state => state.product.loadingWeb)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSell = () => {
    if (Object.keys(userProfile).length !== 0) {
      userProfile.city ? navigate(`/info-produk`) : navigate(`/info-user/${userProfile.id}`)
    } else {
      navigate('/login')
    }
  }
  
  return (
    <Box sx={{ mx: { lg: 15, md: 15, sm: 7, xs: 5 }, mt: { xs: 20, md: 'unset' }, pb: 3 }}>
      <Typography variant='h5' fontWeight={700} sx={{ fontSize: { xs: '1em', md: '2em' } }}>
        Telusuri Kategori
      </Typography>
      <FilterCategory clicked={clicked} setClicked={setClicked}/>
      <ItemCard clicked={clicked}/>
      <Box display={'flex'} onClick={handleSell} justifyContent={'center'}>
        <FloatingButton />
      </Box>
    </Box>
  )
}

export default Products