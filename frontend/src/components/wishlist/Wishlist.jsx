import React from 'react';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

const Wishlist = ({wishlist, setWishlist, handleChange}) => {
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const navigate = useNavigate()
    
    return (
        <Box width={{ md: '70%', xs: '100%' }} mx={'auto'} mt={3}>
            <Toolbar position='relative' >
                <Link to={-1}>
                    <ArrowBackSharpIcon sx={{
                        display: { md: 'block', xs: 'none' }
                        , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                            backgroundColor: '#aaa',
                            opacity: [0.9, 0.8, 0.7],
                        }
                    }} />
                </Link>
                <Box component={'div'} position='absolute' width={{ lg:'60%', md:'70%', sm:'70%', xs:'80%' }} mx={'auto'} sx={{ left: 0, right: 0, top: 0 }}  >
                    <Box component={'div'} rowGap={2} p={2} display={'flex'} mt={2} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                        <Grid container my={1} p={1} >
                            <Grid item xs={3} md={2} display={'flex'} textAlign={"center"} alignItems={'center'} >
                                <Box component={'img'} image= "" sx={{ height: '48px', borderRadius: '16px' }} />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Typography variant='subtitle1' fontWeight={550} my={0} fontSize={{ md:'1rem', xs:'.8rem' }}>
                                jam
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} fontSize={{ md:'1rem', xs:'.8rem' }}>
                                11
                                </Typography>
                            </Grid>
                            <Grid item xs={3} md={4} textAlign="end" >
                                <Typography variant="caption" color='text.secondary'  component="h2" fontSize={{ md:'.8rem', xs:'.6rem' }}>
                                    20 April, 14:04
                                </Typography>
                            </Grid>
                            <Grid item xs={12} display={'flex'} gap={3} mt={3}>
                                <Button  variant="outlined" color="primary" sx={{ width:'100%',height: '40px', borderRadius: '25px' }} >
                                    Hapus
                                </Button>
                                <Button variant="contained" color="primary" sx={{ width:'100%',height: '40px', borderRadius: '25px' }}>
                                    Lihat Produk
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>

            </Toolbar>
        </Box>
    )

}

export default Wishlist