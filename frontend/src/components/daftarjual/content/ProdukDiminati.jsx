import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const ProdukDiminati = () => {
  const [product, setProduct] = React.useState('a');
  return (
    <>
      {product ?
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Product.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Jam Tangan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                    Aksesoris
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Rp.10.000,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Product.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Jam Tangan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                    Aksesoris
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Rp.10.000,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Product.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Jam Tangan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                    Aksesoris
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Rp.10.000,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Product.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Jam Tangan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                    Aksesoris
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Rp.10.000,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Product.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Jam Tangan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                    Aksesoris
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Rp.10.000,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Product.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Jam Tangan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                    Aksesoris
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                    Rp.10.000,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        :
        <>
          <Box display={'flex'} justifyContent={'center'}>
            <Box component={'img'} src='/images/nothing.png' width={276} height={194} />
          </Box>
          <Box display={'flex'} justifyContent={'center'} >
            <Typography component='h5' width={'329px'}>
              Belum ada produkmu yang terjual nih, sabar ya rejeki nggak kemana kok
            </Typography>
          </Box>
        </>
      }
    </>
  )
}

export default ProdukDiminati