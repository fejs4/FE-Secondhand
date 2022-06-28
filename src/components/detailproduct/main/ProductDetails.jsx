import { Alert, Box, Grid, Stack } from '@mui/material'
import React from 'react'
import DescriptionProduct from '../DescriptionProduct'
import ProductImage from '../ProductImage'
import SellerInfo from '../SellerInfo'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import PublishSeller from '../seller/PublishSeller'
import PublishBuyer from '../buyer/PublishBuyer'
import ProductInfo from '../seller/ProductInfo'
import ProductInterest from '../buyer/ProductInterest'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../../../redux/product'
import ModalBuyer from '../buyer/ModalBuyer'

const ProductDetails = ({ status }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const handleClose = () => {
    setError(false);
    setSuccess(false);
    setDeleted(false)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)
  const handlePost = () => {
    setOpen(false)
    setSuccess(true)
  }

  const data = useSelector(state => state.product.detailProduct)
  console.log(data)
  React.useEffect(() => {
    dispatch(fetchProductDetail(id))
  }, [id]);


  return (
    <>
      <Box sx={{ mx: { xl: 15, md: 15, sm: 0 }, mt: { md: 5, xs: 0 }, pb: 3 }} >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, md: 3 }} justifyContent={'center'} position={'relative'} >
          <Box display={{ sm: 'block', md: 'none' }} mt={{ sm: 5, xs: 5 }}>
            <Link to={-1}>
              <ArrowBackSharpIcon sx={{
                fontSize: { sm: '2.5rem', xs: '2rem' }, zIndex: 10, padding: 1, position: 'absolute', borderRadius: '50px', background: 'white', left: '4rem', cursor: 'pointer', '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                  color: 'purple'
                }
              }} />
            </Link>
          </Box>
          <Grid item xl={6} md={8} xs={12} >
            <ProductImage data={data} />
            <Box component={'div'} p={4} mt={3} display={{ md: 'block', xs: 'none' }} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
              <DescriptionProduct data={data} />
            </Box>
          </Grid>
          <Grid item xl={4} md={4} xs={12} mx={{ md: 'unset', xs: 3 }}  >
            {status === 'buyer' ? <ProductInterest data={data} handlePost={handlePost} handleOpen={handleOpenModal} /> : <ProductInfo data={data} />}
            <SellerInfo data={data} />
            <Box component={'div'} p={4} mt={3} display={{ md: 'none', xs: 'block' }} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}>
              <DescriptionProduct />
            </Box>
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent={'center'}>
              {status === 'buyer' ? <PublishBuyer data={data} handleOpen={handleOpenModal} /> : <PublishSeller data={data} />}
            </Box>
          </Grid>
          <Stack position="absolute" className="alert" mx={'auto'} zIndex={100} width={{ md: '50%', xs: '80%' }} sx={{ left: 0, right: 0, top: 0, transition: '0.5s' }} sx={{ marginTop: success ? {xs:"120px", md:'-25px'} : "-350px" }} >
            <Alert variant="filled" severity="success" onClose={handleClose}>Harga tawarmu berhasil dikirim ke penjual</Alert>
          </Stack>
        </Grid>
        <ModalBuyer data={data} open={open} handleClose={handleCloseModal} handlePost={handlePost}/>
      </Box>
    </>
  )
}

export default ProductDetails