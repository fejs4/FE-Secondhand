import { Box, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoryJual from '../CategoryJual'
import CategoryJualSwiper from '../CategoryJualSwiper'
import ListProductJual from '../content/ListProductJual'
import ProdukDiminati from '../content/ProdukDiminati'
import ProdukTerjual from '../content/ProdukTerjual'

const ListJual = () => {
  const [clickedCategory, setClickedCategory] = React.useState('Semua Produk');

  return (
    <Box sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 }, my: 3,pb:3 }} >
      <Grid container>
        <Grid item display={{ xs: 'none', md:'block' }} xl={3} md={4} pr={2} >
          <CategoryJual category={setClickedCategory} clicked={clickedCategory}/> 
        </Grid>
        <Grid item display={{ xs: 'block', md:'none' }} xs={12} mb={2} >
          <CategoryJualSwiper category={setClickedCategory} clicked={clickedCategory}/>
        </Grid>
        <Grid item xs={12} md={8} xl={9} >
          {clickedCategory === 'Semua Produk'? <ListProductJual/> : clickedCategory === 'Diminati'? <ProdukDiminati/> : clickedCategory === 'Terjual'? <ProdukTerjual/> : <ListProductJual/>}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ListJual