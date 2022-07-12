import React from 'react';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import BuyerInfo from './BuyerInfo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ModalDiterima from './ModalDiterima';
import ModalStatus from './ModalStatus';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailTawar, setLoadingDetail } from '../../redux/tawar';
import { createTransaksi, fetchTransaksiSeller } from '../../redux/transaksi';
import InfoPenawaranLoading from '../loading/InfoPenawaranLoading';


const DataPenawar = () => {
    const [openAgreement, setOpenAgreement] = React.useState(false)
    const [openStatus, setOpenStatus] = React.useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()

    const handleCloseAgreement = () => { setOpenAgreement(false) }
    const handleOpenAgreement = async () => { setOpenAgreement(true) }
    const handleCloseStatus = () => { setOpenStatus(false) }
    const handleOpenStatus = () => { setOpenStatus(true) }
    const handleBack = () => { window.localStorage.removeItem('idTransaksiProduk') }
    
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    
    const toDate = (datenow) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const date = new Date(datenow)
        return (date.getDate() + " " + months[date.getMonth()] + ", " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()))
    }
    
    const detailPenawaran = useSelector(state => state.tawar.detailTawar)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })

    const handleReject = () => { 
        try {
            const data = {
                userId: detailPenawaran[0].userId,
                productId: detailPenawaran[0].productId,
                price: detailPenawaran[0].price,
                status: "rejected",
                tawarId: id
            }
            dispatch(createTransaksi(data)).then(data => {
                // if (data.payload.success) {
                //     setTimeout(() => {
                //         window.location.reload()
                //     }, 1500);
                // }
            })
        } catch (err) {
            console.log(err);
        }
    }

    const handleCreate = () => {
        setOpenAgreement(true)
        try {
            const data = {
                userId: detailPenawaran[0].userId,
                productId: detailPenawaran[0].productId,
                price: detailPenawaran[0].price,
                status: "pending",
                tawarId: id
            }
            dispatch(createTransaksi(data)).then(data => {
                if (data.payload.success) {
                    localStorage.setItem(id, true)
                }
            })
        } catch (err) {
            console.log(err);
        }
    }


    const [status, setStatus] = React.useState('')
    const [confirm, setConfirm] = React.useState(false)
    const dataTransaksi = useSelector(state => state.transaksi.transaksiSeller)
    const loading = useSelector(state => state.tawar.loadingDetail)
    const filterTransaksi = Object.keys(dataTransaksi).length !== 0 ? dataTransaksi.filter(data => data.tawarId === Number(id)) : ''
    
    React.useEffect(() => {
        dispatch(fetchDetailTawar(id))
        dispatch(fetchTransaksiSeller())
        if (Object.keys(filterTransaksi).length !== 0 && filterTransaksi[0].status === 'pending') {
            setConfirm(true)
        }
        setTimeout(() => {
            dispatch(setLoadingDetail(false))
          }, 1500)
    }, [dispatch,dataTransaksi])
    return (
        <Box width={{ md: '70%', xs: '90%' }} mx={'auto'} mt={{ xs: 'unset', md: 3 }}>
            <Toolbar position='relative' >
                <Link to={-1}>
                    <ArrowBackSharpIcon onClick={handleBack} sx={{
                        display: { md: 'block', xs: 'none' }, borderRadius: '50px', background: 'white'
                        , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                            color: 'purple'
                        }
                    }} />
                </Link>
                <Box component={'div'} position='absolute' width={{ md: '70%', xs: '100%' }} mx={'auto'} sx={{ left: 0, right: 0, top: 0 }}  >
                    {loading ?
                        <InfoPenawaranLoading />
                        :
                        <>
                            <BuyerInfo />
                            <Typography variant='h6' fontWeight={700} mt={2} sx={{ fontSize: { xs: '.8em', md: '1em', } }}>
                                Daftar Produkmu yang Ditawar
                            </Typography>
                            {Object.keys(detailPenawaran).length !== 0 || Object.keys(filterTransaksi).length !== 0 ?
                                <Box component={'div'} rowGap={2} p={{ xs: 'unset', md: 2 }} display={'flex'} mt={1} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
                                    <Grid container my={1} p={1} >
                                        <Grid item xs={3} sm={2} textAlign="center">
                                            <Box component={'img'} src={`https://be-kel1.herokuapp.com/public/images/${detailPenawaran[0].product.images[0] }`} sx={{ height: '60px', width: '60px', objectFit: 'contain', borderRadius: '16px' }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="caption" color='text.secondary' component="h2" >
                                                Penawaran Produk
                                            </Typography>
                                            <Typography variant='subtitle1' fontWeight={550} my={0} >
                                                {detailPenawaran[0].product.name}
                                            </Typography>
                                            <Typography variant='subtitle1' fontWeight={550} my={0} >
                                                {formatter.format(detailPenawaran[0].product.price)}
                                            </Typography>
                                            <Typography variant='subtitle1' fontWeight={550} my={0} >
                                                Ditawar {formatter.format(detailPenawaran[0].price)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={4} textAlign="end" >
                                            <Typography variant="caption" color='text.secondary' component="h2" >
                                                {toDate(detailPenawaran[0].createdAt)}
                                            </Typography>
                                        </Grid>
                                        <Grid container spacing={1} mt={2} item xs={12} justifyContent={'end'}>
                                            {confirm ? 
                                                <>
                                                    <Grid item xs={3}>
                                                        <Button fullWidth variant="outlined" color="primary" onClick={handleOpenStatus} sx={{ height: '40px', borderRadius: '25px',display: filterTransaksi[0].status !== 'pending' ? 'none' : 'block' }} >
                                                            Status
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button fullWidth variant="contained" color="primary" sx={{ height: '40px', borderRadius: '25px', display: filterTransaksi[0].status !== 'pending' ? 'none' : 'flex', alignItems:'center' }}>
                                                            <Typography variant='caption'>
                                                                Hubungi di
                                                            </Typography>
                                                            <WhatsAppIcon sx={{ ml: 1, fontSize: { md: '1rem', xs: '.5rem' } }} />
                                                        </Button>
                                                    </Grid>
                                                </>
                                                :
                                                <>
                                                    <Grid item xs={3} sx={{ display: Object.keys(filterTransaksi).length !== 0 ? filterTransaksi[0].status !== 'pending' ? 'none' : 'block' : 'unset' }}>
                                                        <Button fullWidth variant="outlined" color="primary" onClick={handleReject} sx={{ height: '40px', borderRadius: '25px', }} >
                                                            Tolak
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={3} sx={{ display: Object.keys(filterTransaksi).length !== 0 ? filterTransaksi[0].status !== 'pending' ? 'none' : 'block' : 'unset' }}>
                                                        <Button fullWidth variant="contained" color="primary" onClick={handleCreate} sx={{ height: '40px', borderRadius: '25px', }}>
                                                            Terima
                                                        </Button>
                                                    </Grid>
                                                </>
                                            }

                                        </Grid>
                                    </Grid>
                                </Box>
                                : ""}
                        </>

                    }
                </Box>
            </Toolbar>
            <ModalStatus handleClose={handleCloseStatus} open={openStatus} status={status} setStatus={setStatus} idTransaksi={filterTransaksi} />
            <ModalDiterima handleClose={handleCloseAgreement} open={openAgreement} data={detailPenawaran} />

        </Box >
    )
}
export default DataPenawar