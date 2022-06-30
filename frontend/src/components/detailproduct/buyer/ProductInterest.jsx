import { Box, Button, IconButton, InputAdornment, Modal, OutlinedInput, Typography } from '@mui/material'
import React , { useState }from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { postWishlist } from '../../../redux/wishlist';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProductInterest = ({data,handleOpen}) => {
    const [love, setLove] = React.useState(false)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const { id } = useParams()
    const dispatch = useDispatch()
    const wishlistAmbil = useSelector(state => state.wishlist.wishlist)
    const handleWishlist = (id) => {
        const data =  {product_id:id}
            dispatch(postWishlist(data))
    }
    // useEffect 
 
    return (
        <>
            <Box component={'div'} rowGap={2} p={4} flexDirection={'column'} display={'flex'} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6' fontWeight={800}>
                        {data? data.name : ''}
                    </Typography>
                    <IconButton sx={{ padding: .5 }} onClick={() => setLove(true)}>
                        <FavoriteIcon onClick={handleWishlist} sx={{ fontSize:'2rem', color:love ? 'red' : 'unset' }}/>
                    </IconButton>
                </Box>
                <Typography variant='h6' sx={{ color: '#8A8A8A' }}>
                    {data? data.category : ''}
                </Typography>
                <Typography variant='h6'>
                     {data? formatter.format(data.price) : ''}
                </Typography>
                <Button color='primary' variant='contained' onClick={handleOpen} sx={{ borderRadius: '16px', height: 'auto', minHeight:'48px', display: { md: 'block', xs: 'none' } }}>
                    Saya tertarik ingin nego
                </Button>
                
            </Box>
        </>
    )
}

export default ProductInterest