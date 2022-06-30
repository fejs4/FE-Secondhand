import { Alert, Avatar, Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const InfoSeller = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const user = useSelector(state => state.auth.userProfile)
  const successMsg = useSelector(state => state.product.success)
  const message = useSelector(state => state.product.message)

  const handleClose = () => {
    setError(false);
    setSuccess(false);
    setDeleted(false)
  };

  return (
    <Box position="relative" sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 }, my: 3 }}>
      <Stack position="absolute" display={message !== '' ? "block": "none"} className="alert" mx={'auto'} width={{ md: '40%', xs: '90%' }} sx={{ left: 0, right: 0, top: 0, transition: '0.5s' }} style={{ 'marginTop': success ? "-25px" : "-350px" }} >
        <Alert variant="filled" severity={successMsg ? "success" : "error"} onClose={handleClose}>{message}</Alert>
      </Stack>
      <Typography variant='h5' fontWeight={700} sx={{ fontSize: { xs: '1.1em', md: '1.7em' } }}>
        Daftar Jual Saya
      </Typography>
      <Grid container my={1} py={1} sx={{ pr: 2, boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: '16px' }}>
        <Grid item xs={3} md={1} textAlign="center">
          <IconButton >
            <Avatar alt="" src={user? `https://be-kel1.herokuapp.com/public/profile/${user.image}` : "/static/images/avatar/2.jpg"} />
          </IconButton>
        </Grid>
        <Grid item xs my={'auto'}>
          <Typography variant='subtitle1' fontWeight={550} my={0} >
            {user ? user.name : ''}
          </Typography>
          <Typography variant='subtitle2'>
            {user ? user.city : ''}
          </Typography>
        </Grid>
        <Grid item textAlign="end" my={'auto'}>
          <Link to={`/info-user/${user? user.id:''}`} style={{ textDecoration: 'none' }}>
            <Button variant="outlined">Edit</Button>
          </Link>
        </Grid>
      </Grid>

    </Box>
  )
}
export default InfoSeller