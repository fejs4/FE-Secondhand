import React from 'react'
import { Box, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Swiper, SwiperSlide } from "swiper/react";


const CategoryJualSwiper = ({category, clicked}) => {
  return (
    <Box >
      <Swiper
        slidesPerView={"auto"}
        className="mySwiper"
      >
        <SwiperSlide className='filter-button'><Button className={'Semua Produk' === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>category('Semua Produk')}><ListAltIcon/>Produk </Button></SwiperSlide>
        <SwiperSlide className='filter-button'><Button className={'Diminati' === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>category('Diminati')}><FavoriteIcon/>Diminati </Button></SwiperSlide>
        <SwiperSlide className='filter-button'><Button className={'Terjual' === clicked ? 'button-active button-controll' : 'button-controll'} onClick={()=>category('Terjual')}><MonetizationOnOutlinedIcon/>Terjual </Button></SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default CategoryJualSwiper