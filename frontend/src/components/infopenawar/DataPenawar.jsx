import React from 'react';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import BuyerInfo from '../detailproduct/BuyerInfo';
import CircleIcon from '@mui/icons-material/Circle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ModalDiterima from './ModalDiterima';
import ModalStatus from './ModalStatus';


const DataPenawar = () => {
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [deleted, setDeleted] = React.useState(false)
    const [accept, setAccept] = React.useState(false)

    const handleClose = () => {
        setAccept(true)
        setOpen(false)
    }
    const handleOpen = async () => {
        setOpen(true)
    }
    const handlePost = () => {
        setOpen(false)
        success(true)
    }

    return (
        <Box width={{ md: '70%', xs: '90%' }} mx={'auto'} mt={3}>
            <Toolbar position='relative' >
                <Link to='/'>
                    <ArrowBackSharpIcon sx={{
                        display: { md: 'block', xs: 'none' }
                        , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                            backgroundColor: '#aaa',
                            opacity: [0.9, 0.8, 0.7],
                        }
                    }} />
                </Link>
                <Box component={'div'} position='absolute' width={'60%'} mx={'auto'} sx={{ left: 0, right: 0, top: 0 }}  >
                    <BuyerInfo />
                    <Typography variant='h6' fontWeight={700} mt={2} sx={{ fontSize: { xs: '.8em', md: '1em', } }}>
                        Daftar Produkmu yang Ditawar
                    </Typography>

                    <Box component={'div'} rowGap={2} p={2} display={'flex'} mt={1} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                        <Grid container my={1} p={1} >
                            <Grid item xs={2} textAlign="center">
                                <Box component={'img'} src='/images/Product.png' sx={{ height: '48px', borderRadius: '16px' }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" color='text.secondary' component="h2" >
                                    Penawaran Produk
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    Jam Tangan Casio
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    Rp 250.000
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    Ditawar Rp 200.000
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="end" >
                                <Typography variant="caption" color='text.secondary' component="h2" >
                                    20 April, 14:04 <CircleIcon style={{ color: 'red', fontSize: '0.9em' }} />
                                </Typography>
                            </Grid>
                            <Grid container spacing={1} mt={2} item xs={12} justifyContent={'end'}>
                                {accept ?
                                    <>
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="outlined" color="primary" onClick={handleOpen} sx={{ height: '40px', borderRadius: '25px' }} >
                                                Status
                                            </Button>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="contained" color="primary" sx={{ height: '40px', borderRadius: '25px' }}>
                                                Hubungi di <WhatsAppIcon sx={{ ml: 1 }} />
                                            </Button>
                                        </Grid>
                                    </>
                                    :
                                    <>
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="outlined" color="primary" sx={{ height: '40px', borderRadius: '25px' }} >
                                                Tolak
                                            </Button>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="contained" color="primary" onClick={handleOpen} sx={{ height: '40px', borderRadius: '25px' }}>
                                                Terima
                                            </Button>
                                        </Grid>
                                    </>
                                }

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Toolbar>
            {accept ?
                <ModalStatus handleClose={handleClose} handlePost={handlePost} open={open} />
                :
                <ModalDiterima handleClose={handleClose} handlePost={handlePost} open={open}/>
            }

        </Box >
    )
}
export default DataPenawar