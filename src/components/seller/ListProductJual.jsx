import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const ListProductJual = () => {
  return (
    <>
        <Box p={2} sx={{boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', borderRadius: '16px', overflow: 'hidden' }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }} overflow='hidden' >
                <Grid item xs={6} sm={3} md={4} >
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
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
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
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
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
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
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
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
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
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
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
                                <Typography gutterBottom variant="h6" component="div">
                                    Jam Tangan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aksesoris
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Rp.10.000,00
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
                
                
            </Grid>
        </Box>
    </>
  )
}

export default ListProductJual