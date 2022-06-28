import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductInfo = ({data}) => {
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    console.log(data)
    return (
        <>
            <Box component={'div'} rowGap={2} p={4} flexDirection={'column'} display={'flex'} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                <Typography variant='h6' fontWeight={800}>
                    {data? data.name : ''}
                </Typography>
                <Typography variant='h6' sx={{ color: '#8A8A8A' }}>
                    {data? data.category : ''}
                </Typography>
                <Typography variant='h6'>
                    {data? formatter.format(data.price) : ''}
                </Typography>
                <Link to='/daftar-jual' style={{ textDecoration:'none' }}>
                    <Button color='primary' variant='contained' fullWidth sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Terbitkan
                    </Button>
                </Link>
                <Link to={`/info-produk/update/${data.id}`} style={{ textDecoration:'none' }}>
                    <Button color='primary' variant='outlined' fullWidth sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Edit
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default ProductInfo