import React from 'react'
import { Box, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Swiper, SwiperSlide } from "swiper/react";


const CategoryJualSwiper = () => {
  const [clicked, setClicked] = React.useState('Semua');

  return (
    <Box >
      <Swiper
        slidesPerView={"auto"}
        className="mySwiper"
      >
        <SwiperSlide className='filter-button'><Button className={'produk' === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>setClicked('produk')}><ListAltIcon/>Produk </Button></SwiperSlide>
        <SwiperSlide className='filter-button'><Button className={'diminati' === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>setClicked('diminati')}><FavoriteIcon/>Diminati </Button></SwiperSlide>
        <SwiperSlide className='filter-button'><Button className={'terjual' === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>setClicked('terjual')}><MonetizationOnOutlinedIcon/>Terjual </Button></SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default CategoryJualSwiper