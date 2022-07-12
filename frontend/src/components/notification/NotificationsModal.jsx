import { Avatar, Box, Divider, Grid, IconButton, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotif } from '../../redux/notif';

const Notifications = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notif.notification)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const notifTerbitkan = Object.keys(notification).length !== 0 ? notification.filter((item) => item.userId === null) : ''
    const notifDitawar = Object.keys(notification).length !== 0 ? notification.filter((item) => item.userId) : ''
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const toDate = (datenow) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const date = new Date(datenow)
        return (date.getDate() + " " + months[date.getMonth()] + ", " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()))
    }

    React.useEffect(() => {
        dispatch(fetchNotif())
    }, []);
    return (
        <>
            {Object.keys(notifDitawar).length !== 0 ? notifDitawar.map((item, index) => {
                return (
                    <Box key={index}>
                        <Grid container my={1} p={1} sx={{
                            cursor: 'pointer', '&:hover': {
                                backgroundColor: '#eee',
                            }
                        }} >
                            <Grid item xs={2} textAlign="center">
                                <IconButton >
                                    <Avatar alt="" src={`https://be-kel1.herokuapp.com/public/images/${item.product.images[0]}`} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" color='text.secondary' component="h2" >
                                    Penawaran Produk
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    {item.product.name}
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    {formatter.format(item.product.price)}
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    Ditawar {formatter.format(item.product.price)}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="end" >
                                <Typography variant="caption" color='text.secondary' component="h2" >
                                {toDate(item.createdAt)} <CircleIcon style={{ color: 'red', fontSize: '0.9em' }} />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: '0 !important' }} />
                    </Box>
                )
            }) : ''}

            {Object.keys(notifTerbitkan).length !== 0 ? notifTerbitkan.map((item, index) => {
                return (
                    <Box key={index}>
                        <Grid container my={1} p={1} sx={{
                            cursor: 'pointer', '&:hover': {
                                backgroundColor: '#eee',
                            }
                        }} >
                            <Grid item xs={2} textAlign="center">
                                <IconButton >
                                    <Avatar alt="" src={`https://be-kel1.herokuapp.com/public/images/${item.product.images[0]}`} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" color='text.secondary' component="h2" >
                                    Berhasil di terbitkan
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    {item.product.name}
                                </Typography>
                                <Typography variant='subtitle1' fontWeight={550} my={0} >
                                    {formatter.format(item.product.price)}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="end" >
                                <Typography variant="caption" color='text.secondary' component="h2" >
                                    {toDate(item.createdAt)} <CircleIcon style={{ color: 'red', fontSize: '0.9em' }} />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: '0 !important' }} />
                    </Box>
                )
            }) : ''}
        </>
    )
}

export default Notifications