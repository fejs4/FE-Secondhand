import { Box } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={{ xs:0,md:3 }} mb={5}>
        <Box display={{ xs: 'none', md: 'block' }} sx={{ width: '236px', height: '224px', backgroundColor: '#B6D4A8', borderRadius: '0 20px 20px 0' }}/>
        <Box component={'img'} src="/images/banner/banner.png" sx={{ width:'100%', display:{md:'block'}, zIndex:{xs:-1} }} />
        <Box display={{ xs: 'none', md: 'block' }} sx={{ width: '236px', height: '224px', backgroundColor: '#E2D4F0', borderRadius: '20px 0 0 20px' }}/>
      </Box>
    </>
  )
}

export default Banner