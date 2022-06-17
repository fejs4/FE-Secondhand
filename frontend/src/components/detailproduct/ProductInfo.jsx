import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductInfo = () => {
    return (
        <>
            <Box component={'div'} rowGap={2} p={4} flexDirection={'column'} display={'flex'} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                <Typography variant='h6' fontWeight={800}>
                    Jam Tangan Casio
                </Typography>
                <Typography variant='h6' sx={{ color: '#8A8A8A' }}>
                    Aksesoris
                </Typography>
                <Typography variant='h6'>
                    Rp.250.000
                </Typography>
                <Link to='/daftar-jual' style={{ textDecoration:'none' }}>
                    <Button color='primary' variant='contained' fullWidth sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Terbitkan
                    </Button>
                </Link>
                <Link to='/info-produk' style={{ textDecoration:'none' }}>
                    <Button color='primary' variant='outlined' fullWidth sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Edit
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default ProductInfo