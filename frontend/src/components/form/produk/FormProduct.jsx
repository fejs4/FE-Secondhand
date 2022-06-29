import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail, postProducts, publishProduct, setTemporary, updateProduct } from '../../../redux/product';
import axios from 'axios';
import { formProductValidation } from '../../../validator/validator';

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};


function maxFilesValidator(file) {
    const maxFile = 4
    if (file.length > maxFile) {
        return {
            code: "file-overload",
            message: `Error the maximum file is 4 files`
        };
    }

    return null
}


const FormProduct = () => {
    const [files, setFiles] = useState([]);
    const [error, setError] = React.useState({});
    const dispatch = useDispatch()
    const location = useLocation().pathname
    const navigate = useNavigate()
    const { id } = useParams()
    const productDetails = useSelector(state => state.product.detailProduct)
    const [data, setData] = useState(
        {
            nama: Object.keys(productDetails).length? productDetails.name : '',
            harga: Object.keys(productDetails).length? productDetails.price :'',
            kategori: Object.keys(productDetails).length ? productDetails.category : 'semua',
            deskripsi: Object.keys(productDetails).length? productDetails.description :'',
            message: '',
            success: null
        }
    )

    // Create form product
    const userProfile = useSelector(state => state.auth.userProfile)

    const handleValidate = (e) => {
        e.preventDefault()
        formProductValidation(data, files, fileRejections, setError)
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        if (error.name !== '' || error.price !== '' || error.description !== '' || error.photo !== '') {
            setData({ ...data, message: 'Gagal memposting produk, lengkapi data', success: false })
        } else {
            try {
                const token = localStorage.getItem('token');
                const idProduct = productDetails.id
                const product = new FormData()
                product.append("name", data.nama)
                product.append("category", data.kategori)
                product.append("price", data.harga)
                product.append("description", data.deskripsi)
                files.forEach(file => {
                    product.append("image", file)
                })
                for (var pair of product.entries()) {
                    console.log(pair[0] + ', ' + pair[1]);
                }
                if (location !== '/info-produk') {
                    if (productDetails.publish) {
                        product.append("publish", true)
                        const postData = await axios(
                            {
                                method: "PUT",
                                data: product,
                                url: `https://be-kel1.herokuapp.com/product/${id}`,
                                headers: {
                                    Authorization: token,

                                }
                            }).then(
                                data => {
                                    setTimeout(() => {
                                        navigate(`/daftar-jual`)
                                    }, 1000);
                                }
                            )
                    } else {
                        product.append("publish", true)
                        const postData = await axios(
                            {
                                method: "PUT",
                                data: product,
                                url: `https://be-kel1.herokuapp.com/product/${id}`,
                                headers: {
                                    Authorization: token,

                                }
                            }).then(
                                data => {
                                    setTimeout(() => {
                                        navigate(`/daftar-jual`)
                                    }, 1000);
                                }
                            )
                    }
                } else {
                    product.append("publish", true)
                    dispatch(postProducts(product))
                    setTimeout(() => {
                        navigate(`/daftar-jual`)
                    }, 1000);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handlePreview = async () => {
        if (error.name !== '' || error.price !== '' || error.description !== '' || error.photo !== '') {
            setData({ ...data, message: 'Gagal memposting produk, lengkapi data', success: false })
        } else {
            const productPreview = new FormData()
            productPreview.append("name", data.nama)
            productPreview.append("category", data.kategori)
            productPreview.append("price", data.harga)
            productPreview.append("description", data.deskripsi)
            
            files.forEach(file => {
                productPreview.append("image", file)
            })
            console.log(productDetails.publish)
            try {
                if (id) {
                    const token = localStorage.getItem('token');
                    productPreview.append("publish", productDetails.publish)
                    const postData = await axios(
                        {
                            method: "PUT",
                            data: productPreview,
                            url: `https://be-kel1.herokuapp.com/product/${id}`,
                            headers: {
                                Authorization: token,

                            }
                        }).then(
                            data => {
                                console.log(data)
                                setTimeout(() => {
                                    navigate(`/detail-product-seller/${id}`)
                                }, 1000);
                            }
                        )
                } else {
                    productPreview.append("publish", false)
                    dispatch(postProducts(productPreview)).then((data) => {
                        setTimeout(() => {
                            navigate(`/detail-product-seller/${data.payload.data.product.id}`)
                        }, 2000);
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        maxFiles: 4,
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
        }
    })

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    alt='images'
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetail(id))
        }
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview))
        }
    }, [files, id])

    return (
        <Box width={{ md: '70%', xs: '90%' }} mx={'auto'} mt={3}>
            <Toolbar position='relative' >
                <Link to={-1}>
                    <ArrowBackSharpIcon sx={{
                        display: { md: 'block', xs: 'none' }, borderRadius: '50px', background: 'white'
                        , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                            color: 'purple'
                        }
                    }} />
                </Link>
                <Box position='absolute' width={'60%'} mx={'auto'} sx={{ left: 0, right: 0, top: 0 }} pb={3} >
                    <InputLabel htmlFor="filled-adornment-amount">Nama Produk</InputLabel>
                    <OutlinedInput
                        sx={{ mt: 0, borderRadius: '16px', p: 1 }}
                        size="small"
                        required
                        error={error.name ? true : false}
                        defaultValue={data.nama}
                        fullWidth
                        placeholder="Nama produk"
                        onChange={(e) => setData({ ...data, nama: e.target.value })}
                        id="name"
                    />
                    <FormHelperText sx={{ color: 'red', position: 'relative', mb: 2 }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.name ? error.name : ''}
                        </Typography>
                    </FormHelperText>

                    <InputLabel htmlFor="filled-adornment-amount">Harga</InputLabel>
                    <OutlinedInput
                        startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                        sx={{ mt: 0, borderRadius: '16px', p: 1 }}
                        size="small"
                        type='number'
                        error={error.price ? true : false}
                        defaultValue={data.harga}
                        required
                        fullWidth
                        placeholder='0,00'
                        onChange={(e) => setData({ ...data, harga: e.target.value })}
                        autoComplete='false'
                    />
                    <FormHelperText sx={{ color: 'red', position: 'relative', mb: 2 }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.price ? error.price : ''}
                        </Typography>
                    </FormHelperText>

                    <InputLabel htmlFor="filled-adornment-amount">Kategori</InputLabel>
                    <FormControl sx={{ width: '100%' }} size='small'>
                        <Select
                            id="demo-simple-select"
                            required
                            sx={{ mt: 0, mb: 2, borderRadius: '16px' }}
                            value={data.kategori}
                            onChange={(e) => setData({ ...data, kategori: e.target.value })}
                        >
                            <MenuItem sx={{ width: '100%' }} value={'semua'} hidden >Pilih Kategori</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'hobi'}>Hobi</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'kendaraan'}>Kendaraan</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'baju'}>Baju</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'elektronik'}>Elektronik</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'kesehatan'}>Kesehatan</MenuItem>
                        </Select>
                    </FormControl>

                    <InputLabel htmlFor="filled-adornment-amount">Deskripsi</InputLabel>
                    <OutlinedInput
                        type='text'
                        autoComplete='false'
                        fullWidth
                        error={error.description ? true : false}
                        defaultValue={data.deskripsi}
                        multiline
                        rows={4}
                        sx={{ borderRadius: '16px', mt: 0, }}
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        onChange={(e) => setData({ ...data, deskripsi: e.target.value })}
                    />
                    <FormHelperText sx={{ color: 'red', position: 'relative', mb: 2 }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.description ? error.description : ''}
                        </Typography>
                    </FormHelperText>

                    <InputLabel htmlFor="filled-adornment-amount">Foto Produk</InputLabel>
                    <Box {...getRootProps()} maxWidth={files.length === 0 ? '100px' : 'unset'}>
                        <input type='file' multiple {...getInputProps()} />
                        {files.length !== 0 ?
                            <Box sx={{ border: '1px dashed #D0D0D0', alignItems: 'center', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                {thumbs}
                            </Box>
                            :
                            <Box sx={{ border: '1px dashed #D0D0D0', width: '96px', height: '96px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                <AddIcon />
                            </Box>
                        }
                    </Box>
                    <FormHelperText sx={{ color: 'red' }}>
                        <Typography variant='p' sx={{ fontSize: '12px' }}>
                            {error.photo ? error.photo : ''}
                        </Typography>
                    </FormHelperText>

                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={6}>
                            <Button fullWidth onMouseUp={handleValidate} onClick={handlePreview} variant="outlined" color="primary" sx={{ height: '48px' }} >
                                Preview
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth onMouseUp={handleValidate} variant="contained" color="primary" sx={{ height: '48px' }} onClick={handleCreate}>
                                Terbitkan
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </Box>
    )
}

export default FormProduct