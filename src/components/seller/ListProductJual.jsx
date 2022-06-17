import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const ListProductJual = () => {
  return (
    <>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }} overflow='hidden' >
                <Grid item xs={6} sm={3} md={4} >
                    <Link to='/info-produk' style={{ textDecoration:'none' }}>
                    <Card sx={{ height: '100%' }} >
                        <CardActionArea sx={{ height: '100%', border: '1px dashed #bbb' }}>
                            
                            <CardContent >
                                <Typography gutterBottom variant="h4" textAlign='center'  component="div">
                                    +
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" textAlign='center'  component="div">
                                    Tambah Produk
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={3} md={4} >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={4} >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={4} >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={4} >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={4} >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={4} >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'1.1em', md:'1.5em'} }}>
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
    </>
  )
}

export default ListProductJual