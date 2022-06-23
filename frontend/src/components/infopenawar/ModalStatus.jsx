import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '400px',
    bgcolor: 'background.paper',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '16px',
    p: 4,
};

const ModalStatus = ({ open, handleClose, handlePost }) => {
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
                        Perbarui status penjualan produkmu
                    </Typography>
                    <Box display={'flex'} fullWidth sx={{ mt: 1, padding: 2, height: '150px' }}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="success" control={<Radio />} label="Berhasil Terjual" />
                                <Typography variant='subtitle1' sx={{ color:'#8A8A8A' }} ml={4}>Kamu telah sepakat menjual produk ini kepada pembeli</Typography>
                                <FormControlLabel value="fail" control={<Radio />} label="Batalkan Transaksi" />
                                <Typography variant='subtitle1' sx={{ color:'#8A8A8A' }} ml={4}>Kamu membatalkan transaksi produk ini dengan pembeli</Typography>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Button variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 9 }}>
                        <Typography>
                            Kirim
                        </Typography>
                    </Button>

                </Box>

            </Modal>
        </>
    )
}

export default ModalStatus