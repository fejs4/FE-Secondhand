import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setTemporary } from '../../../redux/product';
import axios from 'axios';

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
    const [Gambar, setGambar] = useState();

    const [data, setData] = useState(
        {
            nama: '',
            harga: 0,
            kategori: 'semua',
            deskripsi: ''
        }
    )
    console.log(data);
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
                category: data.kategori,
                price:data.harga,
                description: data.deskripsi,
                image: Gambar
            }
            console.log(product);
            const getData = await axios(
                {
                    method:"POST",
                    data:product,
                    withCredentials:true,
                    url:"http://localhost:5000/product"
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
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview))
        }
    }, [files])

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
                        sx={{ mt: 0, mb: 2, borderRadius: '16px', p: 1 }}
                        size="small"
                        required
                        fullWidth
                        placeholder="Nama produk"
                        onChange={(e) => setData({ ...data, nama: e.target.value })}
                        id="name"
                    />
                    <InputLabel htmlFor="filled-adornment-amount">Harga</InputLabel>
                    <OutlinedInput
                        startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                        sx={{ mt: 0, mb: 2, borderRadius: '16px', p: 1 }}
                        size="small"
                        type='number'
                        required
                        fullWidth
                        placeholder='0,00'
                        onChange={(e) => setData({ ...data, harga: e.target.value })}
                        autoComplete='false'
                    />
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
                            <MenuItem sx={{ width: '100%' }} value={'hobi'}>hobi</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'hewan'}>hewan</MenuItem>
                            <MenuItem sx={{ width: '100%' }} value={'perlengkapan'}>perlengkapan</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel htmlFor="filled-adornment-amount">Deskripsi</InputLabel>
                    <OutlinedInput
                        type='text'
                        autoComplete='false'
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ borderRadius: '16px', mt: 0, mb: 2, }}
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        onChange={(e) => setData({ ...data, deskripsi: e.target.value })}
                    />

                    <InputLabel htmlFor="filled-adornment-amount">Foto Produk</InputLabel>
                    <Box {...getRootProps()} maxWidth={files.length === 0? '100px' : 'unset'}>
                        <input type='file' multiple {...getInputProps()} onChange={(e) => setGambar(e.target.files)}/>
                        {files.length !== 0 ?
                            <Box sx={{ border: '1px dashed #D0D0D0', alignItems: 'center', display: 'flex', justifyContent: 'space-around', flexWrap:'wrap' }}>
                                {thumbs}
                            </Box>
                            :
                            <Box sx={{ border: '1px dashed #D0D0D0', width: '96px', height: '96px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                <AddIcon />
                            </Box>
                        }
                    </Box>

                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={6}>
                            <Link to='/detail-product-seller/1' style={{ textDecoration: 'none' }}>
                                <Button fullWidth variant="outlined" color="primary" sx={{ height: '48px' }} >
                                    Preview
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Button fullWidth variant="contained" color="primary" sx={{ height: '48px' }} onClick={handleCreate}>
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