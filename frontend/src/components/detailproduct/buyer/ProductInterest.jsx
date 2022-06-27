import { Box, Button, IconButton, InputAdornment, Modal, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

const ProductInterest = ({success,data}) => {
    const [open, setOpen] = React.useState(false)
    const [love, setLove] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })

    const handlePost = () => {
        setOpen(false)
        success(true)
    }
    return (
        <>
            <Box component={'div'} rowGap={2} p={4} flexDirection={'column'} display={'flex'} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6' fontWeight={800}>
                        {data&& data.name}
                    </Typography>
                    <IconButton sx={{ padding: .5 }} onClick={() => setLove(true)}>
                        <FavoriteIcon sx={{ fontSize:'2rem', color:love ? 'red' : 'unset' }}/>
                    </IconButton>
                </Box>
                <Typography variant='h6' sx={{ color: '#8A8A8A' }}>
                    {data&& data.category}
                </Typography>
                <Typography variant='h6'>
                     {data&& formatter.format(data.price)}
                </Typography>
                <Button color='primary' variant='contained' onClick={handleOpen} sx={{ borderRadius: '16px', height: '48px', display: { md: 'block', xs: 'none' } }}>
                    Saya tertarik ingin nego
                </Button>
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
                            Masukkan harga tawaranmu
                        </Typography>
                        <Typography sx={{ mt: 2, fontSize: '14px', color: '#8A8A8A' }}>
                            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual
                        </Typography>
                        <Box display={'flex'} fullWidth sx={{ mt:3,background: '#EEEEEE',padding:2, height: '50px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)' }}>
                            <Box component={'img'} src='/images/Seller.png' sx={{ height: '48px' }} />
                            <Box display={'flex'} flexDirection={'column'} ml={2}>
                                <Typography>Nama Penjual</Typography>
                                <Typography>Kota</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='h6' mt={3} sx={{ fontSize:'16px' }}>Harga Tawar</Typography>
                            <OutlinedInput
                                    startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                                    type='number'
                                    fullWidth
                                    sx={{ borderRadius: '16px' }}
                                    placeholder='0,00'
                                />
                        </Box>
                        <Button onClick={handlePost} variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px',marginTop:2 }}>
                            Kirim
                        </Button>
                    </Box>
                </Modal>
            </Box>
        </>
    )
}

export default ProductInterest