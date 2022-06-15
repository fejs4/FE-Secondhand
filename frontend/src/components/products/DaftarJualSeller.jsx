import { Alert, Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const DaftarJualSeller = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const handleClose = () => {
    setError(false);
    setSuccess(false);
    setDeleted(false)
  };

  return (
    <Box sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 }, my: 3 }}>
      <Stack className="alert" style={{'margin-top': success ? "0px" : "-150px"}} >
        <Alert variant="filled" severity="success" onClose={handleClose}>Data Berhasil di Buat</Alert>
      </Stack>
      <Typography variant='h5' fontWeight={700}>
        Telusuri Kategori
      </Typography>
    </Box>
  )
}

export default DaftarJualSeller