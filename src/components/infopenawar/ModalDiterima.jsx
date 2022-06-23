import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

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

const ModalDiterima = ({open, handleClose, handlePost}) => {
    return (
        <>
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
                    <Box display={'flex'} fullWidth sx={{ mt: 3, background: '#EEEEEE', padding: 2, height: '150px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)' }}>
                        <Grid container>
                            <Grid item md={12} display={'flex'} justifyContent={'center'} mb={1}>
                                <Typography variant='p'>Product Match</Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Box display={'flex'} flexDirection={'row'}>
                                    <Box component={'img'} src='/images/Buyer.png' sx={{ height: '48px' }} />
                                    <Box display={'flex'} flexDirection={'column'} ml={2}>
                                        <Typography variant='subtitle1' >Nama Pembeli</Typography>
                                        <Typography variant="caption" color='text.secondary'  >Kota</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid container item alignItems={'center'} md={12}>
                                <Box mr={2}>
                                    <Box component={'img'} src='/images/Product.png' sx={{ height: '48px', width: '48px', borderRadius: '16px' }} />
                                </Box>
                                <Box>
                                    <Typography variant='subtitle1' fontWeight={550} my={0} >
                                        Jam Tangan Casio
                                    </Typography>
                                    <Typography variant='subtitle1' fontWeight={550} my={0} >
                                        Rp 250.000
                                    </Typography>
                                    <Typography variant='subtitle1' fontWeight={550} my={0} >
                                        Ditawar Rp 200.000
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>
                    <Button onClick={handlePost} variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 2 }}>
                        <Typography>
                            Hubungi via WhatsApp
                        </Typography>
                        <WhatsAppIcon sx={{ ml: 2 }} />
                    </Button>

                </Box>

            </Modal>
        </>
    )
}

export default ModalDiterima