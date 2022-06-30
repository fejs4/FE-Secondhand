import { Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProductsUser, setDetail, setLoading } from '../../../redux/product';
import CardLoading from '../../loading/CardLoading';

const ListProductJual = () => {
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const data = useSelector(state => state.product.productUser)
    const loading = useSelector(state => state.product.loading)
    const userProfile = useSelector(state => state.auth.userProfile)
    const navigate = useNavigate()

    const handleSell = () => {
        if (Object.keys(userProfile).length !== 0) {
            userProfile.city ? navigate(`/info-produk`) : navigate(`/info-user/${userProfile.id}`)
        } else {
            navigate('/login')
        }
    }

    React.useEffect(() => {
        dispatch(setDetail({}))
        dispatch(fetchProductsUser())
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1500);
    }, [])
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }} >
                <Grid item xs={6} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345, height: data? '100%':'300px' }} onClick={handleSell}>
                        <CardActionArea sx={{ height: '100%', border: '1px dashed #bbb' }}>
                            <CardContent >
                                <Typography gutterBottom variant="h4" textAlign='center' component="div">
                                    +
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" textAlign='center' component="div">
                                    Tambah Produk
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {!loading ?
                    Object.keys(data).length !== 0 ?
                        data.map((item) => {
                            return (
                                <>
                                    <Grid item xs={6} sm={6} md={4} >
                                        <Link to={`/detail-product-seller/${item.id}`} style={{ textDecoration: 'none' }}>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardActionArea>
                                                    <Typography gutterBottom variant="h6" component="div" sx={{ padding: .5, color: 'white', display: item.publish ? 'none' : 'block', background: 'grey', fontSize: '.8em', position: 'absolute' }}>
                                                        {item.publish ? '' : 'unpublish'}
                                                    </Typography>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={`https://be-kel1.herokuapp.com/public/images/${item.images[0]}`}
                                                        alt="green iguana"
                                                        sx={{ objectFit: 'cover' }}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" mb={1} sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
                                                            {item.category}
                                                        </Typography>
                                                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1.1em', md: '1.5em' } }}>
                                                            {formatter.format(item.price)}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </Grid>

                                </>
                            )
                        })
                        : '' :
                    <CardLoading length={Object.keys(data).length} />
                }
            </Grid>
        </>
    )
}

export default ListProductJual