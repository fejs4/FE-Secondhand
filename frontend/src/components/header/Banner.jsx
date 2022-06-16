import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} height={'288px'} mt={{ xs:0,md:3 }} mb={{ md:5, xs:-5 }} columnGap={3} top={{ md:'unset', xs:0 }} position={{ md:'unset', xs:'absolute'}} zIndex={{ md:'unset', xs:-1 }}>
        <Box display={{ xs: 'none', md: 'block' }} sx={{ width: '236px', height: '224px', backgroundColor: '#B6D4A8', borderRadius: '0 20px 20px 0' }}/>
        <Box width={'100%'} height={'288px'} display={'flex'} justifyContent={'space-between'} pt={{ xs:5 }} alignItems={'center'} sx={{ background:'#FFE9CA', borderRadius:{md:'20px', xs:'unset'} }}>
            <Box width={{ xs:'100%', md:'100%', lg:'50%' }} padding={5}>
              <Typography variant='h4' fontWeight={700} sx={{ fontSize:{lg:'2rem', xs:'1.5rem'} }} my={1}>Bulan Ramadhan</Typography>
              <Typography variant='h4' fontWeight={700} sx={{ fontSize:{md:'2rem', xs:'1.5rem'} }} my={1}>Banyak Diskon!</Typography>
              <Typography variant='h6' fontWeight={500} sx={{ fontSize:{md:'1.5rem', xs:'1rem'} }} my={1}>Diskon Hingga</Typography>
              <Typography variant='h5' fontWeight={700} my={1} sx={{ fontSize:{md:'2rem', xs:'1.5rem'}, color:'red' }} >60%</Typography>
            </Box>
            <Box width={{ lg:'40%', md:'45%', xs:'50%' }} height={'100%'} position={'relative'} >
              <Box component={'img'} src='/images/banner/Rectangle 137.png' display={{ xs:'none', md:'block' }} width={'100%'} height={'100%'}  position={'absolute'} />
              <Box component={'img'} src='/images/banner/Rectangle 136.png' display={{ xs:'none', md:'block' }} width={'100%'} height={'100%'} position={'absolute'}/>
              <Box component={'img'} src='/images/banner/png_gift_88837.png' width={'100%'} height={'50%'} top={'25%'} right={'10%'}  position={'absolute'}/> 
            </Box>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }} sx={{ width: '236px', height: '224px', backgroundColor: '#E2D4F0', borderRadius: '20px 0 0 20px' }}/>
      </Box>
    </>
  )
}

export default Banner