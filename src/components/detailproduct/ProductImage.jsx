import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Box } from '@mui/material';

const ProductImage = () => {
    return (
        <>
            <Box>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ width:'600px' }}>
                        <Box component={'img'} src='/images/Product.png' sx={{ borderRadius:'16px', width:'100%', height:'100%' }}/>
                    </SwiperSlide>
                    <SwiperSlide style={{ width:'600px' }}>
                        <Box component={'img'} src='/images/Product.png' sx={{ borderRadius:'16px', width:'100%', height:'100%' }}/>
                    </SwiperSlide>
                    <SwiperSlide style={{ width:'600px' }}>
                        <Box component={'img'} src='/images/Product.png' sx={{ borderRadius:'16px', width:'100%', height:'100%' }}/>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    )
}

export default ProductImage