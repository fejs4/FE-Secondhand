import React from 'react';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Modal, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import BuyerInfo from '../detailproduct/BuyerInfo';
import CircleIcon from '@mui/icons-material/Circle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '438px',
    bgcolor: 'background.paper',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '16px',
    p: 4,
};

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
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [deleted, setDeleted] = React.useState(false);
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

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
                                <Button fullWidth variant="contained" color="primary"  onClick={handleOpen} sx={{ height: '40px', borderRadius:'25px'  }}>
                                    Terima
                                </Button>
                        </Grid>
                    </Grid>
        </Grid>
        </Box> 

                </Box>

                </Toolbar>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box display={'flex'} justifyContent={'flex-end'}>
                            <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                        </Box>
                        <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2, fontSize: '14px', fontWeight: 700 }}>
                            Yeay kamu berhasil mendapat harga yang sesuai
                        </Typography>
                        <Typography sx={{ mt: 2, fontSize: '14px', color: '#8A8A8A' }}>
                            Segera hubungi pembeli melalui WhatsApp untuk transaksi selanjutnya
                        </Typography>
                        <Box display={'flex'} fullWidth sx={{ mt:3,background: '#EEEEEE',padding:2, height: '150px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)' }}>
                            <Box component={'img'} src='/images/Buyer.png' sx={{ height: '48px' }} />
                            <Box display={'flex'} flexDirection={'column'} ml={2}>
                                <Typography>Nama Pembeli</Typography>
                                <Typography variant="caption" color='text.secondary'  component="h2" >Kota</Typography>
                                {/* <BuyerInfo/> */}
                            </Box>
                            <Grid >
                            <Box component={'img'} src='/images/Product.png' sx={{ height:'48px' , borderRadius:'16px'}}/>
                            </Grid>
                            <Grid item xs={6}>
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
                        </Box>
                        <Button onClick={handlePost} variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px',marginTop:2 }}>
                            Hubungi via WhatsApp
                        </Button>
                        
                    </Box>
                    
                </Modal>
                </Box>
    )
                }
                export default DataPenawar