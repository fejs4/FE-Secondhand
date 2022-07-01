import { Box, Button, IconButton, InputAdornment, Modal, OutlinedInput, Typography } from '@mui/material'
import React , { useState }from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deleteWishlist, fetchWishlist, postWishlist } from '../../../redux/wishlist';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { fetchTawar } from '../../../redux/tawar';

const ProductInterest = ({data,handleOpen}) => {
    // Wishlist
    const [love, setLove] = useState(false)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const { id } = useParams()
    const dispatch = useDispatch()
    const wishlistAmbil = useSelector(state => state.wishlist.wishlist)
    const getId = Object.keys(wishlistAmbil).length !== 0 && wishlistAmbil.map((data) => data.productId)
    const onWishtlist = getId ? getId.includes(Number(id)) : ''

    const dataUser = useSelector(state => state.auth.userProfile)
    const detailProduct = useSelector(state => state.product.detailProduct)

    const handleWishlist = async () => {
        if (dataUser.id !== detailProduct.user.id) {
            if (love === false) {
                setLove(true)
                const data =  {
                    product_id : id
                }
                dispatch(postWishlist(data))
            }else{
                setLove(false)
                const detailWishlist = wishlistAmbil.filter(item => item.productId === Number(id))
                const dataId = detailWishlist[0].id
                dispatch(deleteWishlist(dataId))
            }
        }
    }

    // Tawar
    const dataTawar = useSelector(state=>state.tawar.tawar)
    const tawarID = Object.keys(dataTawar).length !== 0 ? dataTawar.filter(item => item.productId === Number(id)) : ''
    console.log(dataTawar)

    React.useEffect(()=>{
        if (onWishtlist) {
            setLove(true)
        }
        dispatch(fetchWishlist())
        dispatch(fetchTawar())
    },[id])
 
    return (
        <>
            <Box component={'div'} rowGap={2} p={4} flexDirection={'column'} display={'flex'} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6' fontWeight={800}>
                        {data? data.name : ''}
                    </Typography>
                    <IconButton sx={{ padding: .5 }} >
                        <FavoriteIcon onClick={handleWishlist} sx={{ fontSize:'2rem', color: love? 'red':'unset'  }}/>
                    </IconButton>
                </Box>
                <Typography variant='h6' sx={{ color: '#8A8A8A' }}>
                    {data? data.category : ''}
                </Typography>
                <Typography variant='h6'>
                     {data? formatter.format(data.price) : ''}
                </Typography>
                {Object.keys(tawarID).length === 0 ? 
                <Button color='primary' variant='contained' onClick={handleOpen} sx={{ borderRadius: '16px', height: 'auto', minHeight:'48px', display: { md: 'block', xs: 'none' } }}>
                    Saya tertarik ingin nego
                </Button>:  
                <Button color='primary' variant='contained' disabled onClick={handleOpen} sx={{ borderRadius: '16px', height: 'auto', minHeight:'48px', display: { md: 'block', xs: 'none' }}}>
                    Menunggu respon penjual
                </Button>
                }
                
            </Box>
        </>
    )
}

export default ProductInterest