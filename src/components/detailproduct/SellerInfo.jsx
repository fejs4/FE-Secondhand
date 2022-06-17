import { Box, Typography } from '@mui/material'
import React from 'react'

const SellerInfo = () => {
  return (
    <>
        <Box component={'div'} rowGap={2} p={4} display={'flex'} mt={3} sx={{ boxShadow:'0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius:'16px'}}>
            <Box component={'img'} src='/images/Seller.png' sx={{ height:'48px' }}/>
            <Box display={'flex'} flexDirection={'column'} ml={2}>
                <Typography>Nama Penjual</Typography>
                <Typography>Kota</Typography>
            </Box>
        </Box>
    </>
  )
}

export default SellerInfo