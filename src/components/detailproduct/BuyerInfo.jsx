import { Box, Typography } from '@mui/material'
import React from 'react'

const BuyerInfo = () => {
  return (
    <>
        <Box component={'div'} rowGap={2} p={{ xs:2, md:4 }} display={'flex'} mt={3} sx={{ boxShadow:'0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius:'16px'}}>
            <Box component={'img'} src='/images/Buyer.png' sx={{ height:'48px' }}/>
            <Box display={'flex'} flexDirection={'column'} ml={2}>
                <Typography>Nama Pembeli</Typography>
                <Typography color='text.secondary'>Kota</Typography>
            </Box>
        </Box>
    </>
  )
}

export default BuyerInfo