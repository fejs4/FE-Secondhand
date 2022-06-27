import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Toolbar from '@mui/material/Toolbar';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formUserValidation } from '../../../validator/validator';


const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: '98px',
    height: '98px',
    objectFit: 'contain'
};

const maxFile = 1

function maxFilesValidator(file) {
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
    const userProfile = useSelector(state => state.auth.userProfile)
    const [data, setData] = useState({
        nama: userProfile.name? userProfile.name: '',
        kota: userProfile.city? userProfile.city:'jakarta',
        alamat: userProfile.address? userProfile.address:'',
        nohp: userProfile.number_mobile? userProfile.number_mobile:'',
        message: '',
        success: null
    })
    const navigate = useNavigate()
    
    const handleValidate = (e) => {
        e.preventDefault()
        formUserValidation(data, files,fileRejections, setError)
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        if (error.name !== '' || error.address !== '' || error.photo !== '' || error.phone !== '') {
            setData({ ...data, message: 'Gagal login, lengkapi data', success: false })
        } else {
            try {
                const product = new FormData()
                product.append("id", userProfile.id)
                product.append("name", data.nama)
                product.append("city", data.kota)
                product.append("address", data.alamat)
                product.append("number_mobile", data.nohp)
                product.append("image", files[0])
                const getData = await axios(
                    {
                        method: "PUT",
                        data: product,
                        url: "http://localhost:5000/users/profile"
                    }).then(
                        data => {
                            setData({ ...data, message:data.data.message , success: data.data.success })
                            window.location.reload()
                        }
                    )
            } catch (error) {
                console.log(error);
            }
        }
    }

    const { getRootProps, getInputProps,fileRejections } = useDropzone({
        maxFiles: 1,
        validator: maxFilesValidator,
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    })


    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt='images'
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));
    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [data.success])
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
                <Box position='absolute' width={'60%'} mx={'auto'} sx={{ left: 0, right: 0, top: 0 }} >
                    <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                    <Box {...getRootProps({ className: 'dropzone' })} sx={{ maxWidth: '96px', height: '96px', m: 'auto' }}>
                        <Box sx={{ color: "primary", background: '#E2D4F0', height: '100%', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                            <input {...getInputProps()} type='file' name='images-product' multiple />
                            {userProfile.image ? userProfile.image.length !== 0 ?
                            <Box component={'img'}
                            src={`http://localhost:5000/public/images/${userProfile.image}`}
                            alt='profile'
                            sx={{ borderRadius:'12px', width:'96px', height:'96px', objectFit:'contain', boxShadow:' 0px 0px 10px rgba(0, 0, 0, 0.15)',
                            display: thumbs.length !== 0 ? 'none' : 'block' }}
                            /> 
                            : '' :
                            
                            files.length !== 0 ? 
                            '' 
                            : <PhotoCameraOutlinedIcon sx={{ color: '#7126B5' }} />}
                            <Box display={'flex'} flexWrap={'wrap'}>
                                {thumbs}
                            </Box>
                        </Box>
                    </Box>
                    <FormHelperText sx={{ color: 'red', position: 'relative', justifyContent: 'center', display: 'flex' }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.photo ? error.photo : ''}
                        </Typography>
                    </FormHelperText>

                    <InputLabel htmlFor="filled-adornment-amount">Nama</InputLabel>
                    <OutlinedInput
                        sx={{ mt: 0, borderRadius: '16px', p: 1 }}
                        size="small"
                        required
                        error={error.name ? true: false}
                        defaultValue={userProfile.name? userProfile.name : ''}
                        fullWidth
                        placeholder="Nama"
                        id="name"
                        autoComplete='false'
                        onChange={(e) => setData({ ...data, nama: e.target.value })}
                    />
                    <FormHelperText sx={{ color: 'red', position: 'relative', mb:2 }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.name ? error.name : ''}
                        </Typography>
                    </FormHelperText>

                    <InputLabel htmlFor="filled-adornment-amount">Kota</InputLabel>
                    <FormControl sx={{ width: '100%' }} size='small' placeholder='Pilih Kota'>
                        <Select
                            id="demo-simple-select"
                            required
                            sx={{ mt: 0, borderRadius: '16px', mb:2 }}
                            defaultValue={userProfile.city? userProfile.city : data.kota}
                            onChange={(e) => setData({ ...data, kota: e.target.value })}
                        >
                            <MenuItem sx={{ width: '100%' }} value={'jakarta'}>Jakarta</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'bogor'}>Bogor</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'depok'}>Depok</MenuItem>
                        </Select>
                    </FormControl>

                    <InputLabel htmlFor="filled-adornment-amount">Alamat</InputLabel>
                    <OutlinedInput
                        type='text'
                        autoComplete='false'
                        fullWidth
                        error={error.address? true: false}
                        defaultValue={userProfile.address? userProfile.address : ''}
                        multiline
                        rows={4}
                        onChange={(e) => setData({ ...data, alamat: e.target.value })}
                        sx={{ borderRadius: '16px', mt: 0 }}
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                    />
                    <FormHelperText sx={{ color: 'red', position: 'relative', mb:2 }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.address ? error.address : ''}
                        </Typography>
                    </FormHelperText>

                    <InputLabel htmlFor="filled-adornment-amount">No. Handphone</InputLabel>
                    <OutlinedInput
                        sx={{ mt: 0, borderRadius: '16px', p: 1 }}
                        size="small"
                        required
                        defaultValue={userProfile.number_mobile? userProfile.number_mobile : ''}
                        error={error.phone? true: false}
                        fullWidth
                        placeholder='+62812345678'
                        autoComplete='false'
                        onChange={(e) => setData({ ...data, nohp: e.target.value })}
                    />
                    <FormHelperText sx={{ color: 'red', position: 'relative', mb:2 }}>
                        <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                            {error.phone ? error.phone : ''}
                        </Typography>
                    </FormHelperText>

                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12}>
                            <Button fullWidth onMouseUp={handleValidate} variant="contained" color="primary" sx={{ height: '48px' }} onClick={handleCreate}>
                                Simpan
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </Box>
    )
}

export default FormProduct