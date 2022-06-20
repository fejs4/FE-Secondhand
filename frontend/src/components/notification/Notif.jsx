import React from 'react'
import { Avatar, Box, Divider, Grid,  IconButton,  Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

const Notif = () => {
    return (
        <>
            <Box>
                <Grid container my={1} p={1} sx={{
                    cursor: 'pointer', '&:hover': {
                        backgroundColor: '#eee',
                    }
                }} >
                    <Grid item xs={2} textAlign="center">
                        <IconButton >
                            <Avatar alt="" src="/static/images/avatar/2.jpg" />
                        </IconButton>
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
                </Grid>
                <Divider sx={{ mt: '0 !important' }} />
                <Grid container my={1} p={1} sx={{
                    cursor: 'pointer', '&:hover': {
                        backgroundColor: '#eee',
                    }
                }} >
                    <Grid item xs={2} textAlign="center">
                        <IconButton >
                            <Avatar alt="" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="caption" color='text.secondary' component="h2" >
                            Berhasil di terbitkan
                        </Typography>
                        <Typography variant='subtitle1' fontWeight={550} my={0} >
                            Jam Tangan Casio
                        </Typography>
                        <Typography variant='subtitle1' fontWeight={550} my={0} >
                            Rp 250.000
                        </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="end" >
                        <Typography variant="caption" color='text.secondary' component="h2" >
                            20 April, 12:00 <CircleIcon style={{ color: 'red', fontSize: '0.9em' }} />
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: '0 !important' }} />
            </Box>
        </>
    )
}

export default Notif