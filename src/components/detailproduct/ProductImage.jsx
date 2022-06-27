import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Box } from '@mui/material';

const ProductImage = ({data}) => {
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
                    {Object.keys(data).length !== 0? data.images.map((item) =>{
                        return(
                            <>        
                            <SwiperSlide style={{ width:{xs:'300px',md:'600px'}, height:'100%', minHeight:{xs:'300px',md:'600px'} }}>
                                <Box component={'img'} src={`http://localhost:5000/public/images/${item}`} sx={{ borderRadius:{md:'16px',xs:0}, width:'100%', height:'100%', objectFit:'cover' }}/>
                            </SwiperSlide>
                            </>
                       )
                    }) : ''} 
                </Swiper>
            </Box>
        </>
    )
}

export default ProductImage