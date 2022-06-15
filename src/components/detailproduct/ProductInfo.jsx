import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const ProductInfo = () => {
    return (
        <>
            {/* <Box sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)', height:{md:'300px', xs:'180px'}, width: '100%', borderRadius: '16px', mt: { md: 0, xs: 2 } }}>
                <Box rowGap={2} display={'flex'} flexDirection={'column'} p={3} height={'100%'} > */}
                <Box component={'div'} rowGap={2} p={4} flexDirection={'column'} display={'flex'} sx={{ boxShadow:'0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius:'16px' }} backgroundColor={{ md:'unset', xs:'white' }} shadow={1} >
                    <Typography variant='h6' fontWeight={800}>
                        Jam Tangan Casio
                    </Typography>
                    <Typography variant='h6' sx={{ color: '#8A8A8A' }}>
                        Aksesoris
                    </Typography>
                    <Typography variant='h6'>
                        Rp.250.000
                    </Typography>
                    <Button color='primary' variant='contained' sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Terbitkan
                    </Button>
                    <Button color='primary' variant='outlined' sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Edit
                    </Button>
                </Box>
        
        </>
    )
}

export default ProductInfo