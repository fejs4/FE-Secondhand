import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { publishProduct } from '../../../redux/product'

const ProductInfo = ({data}) => {
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handlePublish = () =>{
        if (data.publish === false) {
            dispatch(publishProduct(id))
            setTimeout(() => {
                navigate('/daftar-jual')
            }, 1500);
        }else{
            navigate('/daftar-jual')
        }
    }

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
                    <Button color='primary' onClick={handlePublish} variant='contained' fullWidth sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Terbitkan
                    </Button>
                <Link to={`/info-produk/update/${id}`} style={{ textDecoration:'none' }}>
                    <Button color='primary' variant='outlined' fullWidth sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                        Edit
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default ProductInfo