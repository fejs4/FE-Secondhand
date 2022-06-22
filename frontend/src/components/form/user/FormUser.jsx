import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Toolbar from '@mui/material/Toolbar';
import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
    width: 'auto',
    height: '100%'
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
    const [data, setData] = useState({
        nama: '',
        kota: 'jakarta',
        alamat: '',
        nohp: ''
    })

    const temp = []
    if (files.length !== 0) {
        files.map((file) => {
            temp.push(file.path)
        })
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const product = {
                name: data.nama,
                city: data.kota,
                address:data.alamat,
                number_mobile: data.nohp,
                image: temp
            }
            console.log(product);
            const getData = await axios(
                {
                    method:"PUT",
                    data:product,
                    url:"http://localhost:5000/users/profile"
                }).then(
                data => {
                    console.log(data)
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    const { getRootProps, getInputProps, fileRejections } = useDropzone({
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
                    onChange={(e) => setData({foto: e.target.value})}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [])

    return (
        <Box width={{ md: '70%', xs: '90%' }} mx={'auto'} mt={3}>
            <Toolbar position='relative' >
                <Link to='/'>
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
                            <input {...getInputProps()} />
                            {files.length !== 0 ? '' : <PhotoCameraOutlinedIcon sx={{ color: '#7126B5' }} />}
                            <Box display={'flex'} flexWrap={'wrap'}>
                                {thumbs}
                            </Box>
                        </Box>
                    </Box>

                    <InputLabel htmlFor="filled-adornment-amount">Nama*</InputLabel>
                    <OutlinedInput
                        sx={{ mt: 0, mb: 2, borderRadius: '16px', p: 1 }}
                        size="small"
                        required
                        fullWidth
                        placeholder="Nama"
                        id="name"
                        autoComplete='false'
                        onChange={(e) => setData({...data, nama: e.target.value})}
                    />

                    <InputLabel htmlFor="filled-adornment-amount">Kota*</InputLabel>
                    <FormControl sx={{ width: '100%' }} size='small' placeholder='Pilih Kota'>
                        <Select
                            id="demo-simple-select"
                            required
                            sx={{ mt: 0, mb: 2, borderRadius: '16px' }}
                            value={data.kota}
                            onChange={(e) => setData({...data, kota: e.target.value})}
                        >
                            <MenuItem sx={{ width: '100%' }} value={'jakarta'}>Jakarta</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'bogor'}>Bogor</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'depok'}>Depok</MenuItem>
                        </Select>
                    </FormControl>

                    <InputLabel htmlFor="filled-adornment-amount">Alamat*</InputLabel>
                    <OutlinedInput
                        type='text'
                        autoComplete='false'
                        fullWidth
                        multiline
                        rows={4}
                        onChange={(e) => setData({...data, alamat: e.target.value})}
                        sx={{ borderRadius: '16px', mt: 0, mb: 2, }}
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                    />

                    <InputLabel htmlFor="filled-adornment-amount">No. Handphone*</InputLabel>
                    <OutlinedInput
                        sx={{ mt: 0, mb: 2, borderRadius: '16px', p: 1 }}
                        size="small"
                        required
                        fullWidth
                        placeholder='+62812345678'
                        autoComplete='false'
                        onChange={(e) => setData({...data, nohp: e.target.value})}
                    />
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="primary" sx={{ height: '48px' }} onClick={handleCreate}>
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