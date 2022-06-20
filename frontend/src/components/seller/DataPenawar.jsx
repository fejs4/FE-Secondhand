import React from 'react';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import BuyerInfo from '../detailproduct/BuyerInfo';
import CircleIcon from '@mui/icons-material/Circle';


const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const DataPenawar = () => {
    return (
        <Box width={{ md: '70%', xs: '90%' }} mx={'auto'} mt={3}>
            <Toolbar position='relative' >
                <Link to='/'>
                    <ArrowBackSharpIcon sx={{
                        display: { md: 'block', xs: 'none' }
                        , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                            backgroundColor: '#aaa',
                            opacity: [0.9, 0.8, 0.7],}}} />
                </Link>
                <Box component={'div'} position='absolute'  width={'60%'} mx={'auto'} sx={{ left: 0, right: 0, top: 0 }}  >
                <BuyerInfo/>
                <Typography variant='h6' fontWeight={700} mt={2} sx={{ fontSize:{xs:'1.2em', md:'1.4em', }}}>
                    Daftar Produkmu yang Ditawar
                </Typography>

                <Box component={'div'} rowGap={2} p={2} display={'flex'} mt={1} sx={{ boxShadow:'0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius:'16px'}}>   
                <Grid container my={1} p={1} >
            <Grid item xs={2} textAlign="center">
            <Box component={'img'} src='/images/Product.png' sx={{ height:'48px' , borderRadius:'16px'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="caption" color='text.secondary' component="h2" >
                    Penawaran Produk
                </Typography>
                <Typography variant='subtitle1' fontWeight={550}  my={0} >
                    Jam Tangan Casio
                </Typography> 
                <Typography variant='subtitle1' fontWeight={550}  my={0} >
                    Rp 250.000
                </Typography>
                <Typography variant='subtitle1' fontWeight={550}  my={0} >
                    Ditawar Rp 200.000
                </Typography>
            </Grid>
            <Grid item xs={4} textAlign="end" >
                <Typography variant="caption" color='text.secondary' component="h2" >
                    20 April, 14:04 <CircleIcon style={{ color: 'red', fontSize:'0.9em' }}/>
                </Typography>
            </Grid>    
            <Grid container spacing={1} mt={2} item xs={12} textAlign="end" >
                        <Grid item xs={3}>
                                <Button fullWidth variant="outlined" color="primary" sx={{ height: '40px',  borderRadius:'25px' }} >
                                    Tolak
                                </Button>
                        </Grid>
                        <Grid item xs={3}>
                                <Button fullWidth variant="contained" color="primary" sx={{ height: '40px', borderRadius:'25px'  }}>
                                    Terima
                                </Button>
                        </Grid>
                    </Grid>
                {/* <Link to='/' style={{ textDecoration:'none' }}>
                    <Button  color='primary' variant='outlined' fullWidth sx={{ borderRadius: '25px', height: '48px', display: { md: 'block', xs: 'block' } }}>
                        Tolak
                    </Button>
                </Link>
            <Link to='/daftar-jual' style={{ textDecoration:'none' }}>
                    <Button color='primary' variant='contained' fullWidth sx={{ borderRadius: '25px', height: '48px', display: { md: 'block', xs: 'block' } }}>
                        Terima
                    </Button>
                </Link> */}

            
        </Grid>
        </Box> 

                </Box>

                </Toolbar>
                </Box>
    )
                }
                export default DataPenawar