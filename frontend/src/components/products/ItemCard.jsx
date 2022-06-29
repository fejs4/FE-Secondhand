import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts, setLoading } from '../../redux/product'
import Skeleton from '@mui/material/Skeleton';
import CardLoading from '../loading/CardLoading'
import axios from 'axios'

const ItemCard = ({clicked}) => {
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const data = useSelector(state => state.product.products)
    const loading = useSelector(state => state.product.loading)

    React.useEffect(() => {
        dispatch(fetchProducts(clicked))
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1500);
    }, [clicked])
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }} mt={3}>
                {!loading ?
                    Object.keys(data).length !== 0 ?
                        data.map((item) => {
                            return (
                                <>
                                    <Grid item xs={6} sm={6} md={4} xl={2}  >
                                        <Link to={`/detail-product-buyer/${item.id}`} style={{ textDecoration: 'none' }}>
                                            <Card sx={{ maxWidth: 345 }} key={item.name}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={item.images ? `https://be-kel1.herokuapp.com/public/images/${item.images[0]}` : ''}
                                                        alt="green iguana"
                                                        sx={{ objectFit: 'cover' }}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                                                            {item.name ? item.name : ''}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.9em', md: '1.2em' } }}>
                                                            {item.category ? item.category : ''}
                                                        </Typography>
                                                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.em', md: '1.3em' } }}>
                                                            {item.price ? formatter.format(item.price) : ''}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </>
                            )
                        }) :
                        <Box component={'div'} mx={'auto'} mt={3}>
                            <Typography variant='h6'>
                                "Data Kosong"
                            </Typography>
                        </Box>
                    : <CardLoading length={Object.keys(data).length} xl={2}/>
                }
            </Grid>
        </>
    )
}

export default ItemCard