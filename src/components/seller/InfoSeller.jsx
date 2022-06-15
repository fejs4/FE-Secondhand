import { Alert, Avatar, Box, Button,  Grid, IconButton, Stack,  Typography } from '@mui/material'
import React, { useState } from 'react'

const InfoSeller = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(true);
    const [deleted, setDeleted] = useState(false);
  
    const handleClose = () => {
      setError(false);
      setSuccess(false);
      setDeleted(false)
    }; 
  
    return (
      <Box position="relative" sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 }, my: 3 }}>
        <Stack position="absolute" className="alert" mx={'auto'}  width={{ md:'40%', xs:'80%' }} sx={{ left: 0, right: 0,top: 0, transition: '0.5s' }} style={{'margin-top': success ? "-25px" : "-350px"}} >
          <Alert variant="filled" severity="success" onClose={handleClose}>Data Berhasil di Buat</Alert>
        </Stack>
        <Typography variant='h5' fontWeight={700} sx={{ fontSize:{xs:'1.1em', md:'1.7em'} }}>
          Daftar Jual Saya
        </Typography>
        <Grid container my={1} py={1} sx={{ pr:2, boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: '16px' }}>
            <Grid xs={3} md={1} textAlign="center">
                <IconButton >
                    <Avatar alt="" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Grid>
            <Grid xs my={'auto'}>
                <Typography variant='subtitle1' fontWeight={550}  my={0} >
                    Nama Penjual
                </Typography> 
                <Typography  variant='subtitle2'>
                    LOGO
                </Typography> 
            </Grid>
            <Grid  textAlign="end" my={'auto'}>
                <Button variant="outlined">Edit</Button>
            </Grid>    
        </Grid>
        
      </Box>
    )
  }
export default InfoSeller