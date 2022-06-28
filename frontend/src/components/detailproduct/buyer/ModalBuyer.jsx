import { Box, Button, InputAdornment, Modal, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md:'360px', xs:'300px'},
    height: {md:'438px', xs:'400px'},
    bgcolor: 'background.paper',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '16px',
    p: '1rem 2rem 2rem 2rem',
};


const ModalBuyer = ({data, open, handleClose, handlePost}) => {
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
                        Masukkan harga tawaranmu
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: '14px', color: '#8A8A8A' }}>
                        Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual
                    </Typography>
                    <Box display={'flex'} fullWidth sx={{ mt: 3, background: '#EEEEEE', padding: 2, height: '50px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)' }}>
                        <Box component={'img'} src={data.user ? `http://localhost:5000/public/profile/${data.user.image}` : ''} sx={{ maxHeight:'48px',maxWidth:'48px',objectFit:'cover' ,borderRadius:'12px' }} />
                        <Box display={'flex'} flexDirection={'column'} ml={2}>
                            <Typography>{data.user ? data.user.name : ''}</Typography>
                            <Typography>{data.user ? data.user.city : ''}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant='h6' mt={3} sx={{ fontSize: '16px' }}>Harga Tawar</Typography>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                            type='number'
                            fullWidth
                            sx={{ borderRadius: '16px' }}
                            placeholder='0,00'
                        />
                    </Box>
                    <Button onClick={handlePost} variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 2 }}>
                        Kirim
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default ModalBuyer