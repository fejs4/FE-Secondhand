import { Box, Grid, Typography, Button, FormHelperText } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { registerValidation } from '../../validator/validator';

const Register = () => {
    // Login
    const [error, setError] = React.useState({});
    const [values, setValues] = React.useState({
        password: '',
        email: '',
        name: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const registerValidate = (e) => {
        e.preventDefault()
        registerValidation(values, setError)
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Grid container height={'100vh'} overflow={'hidden'}>
                <Grid item xs={12} sm={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <img src="/images/img.png" alt="brand" style={{ minHeight: '100%', width: '100%', width: '100%', objectFit: 'cover' }} />
                </Grid>
                <Grid container item xs={12} sm={12} md={6} height={'100%'} direction={'column'} justifyContent={{ xl: 'center', md: 'center', sm: 'none' }} sx={{ px: { xl: 20, md: 10, sm: 10, xs: 5 } }} >
                    <Box>
                        <Box display={{ sm: 'block', md: 'none' }} mt={{ sm: 5, xs: 5 }}>
                            <IconButton sx={{ padding: 0 }}>
                                <ArrowBackIcon sx={{ fontSize: '2rem', color: 'black' }} />
                            </IconButton>
                        </Box>
                        <Box mt={{ sm: 5, xs: 5 }}>
                            <Typography variant='h4' fontWeight={700}>
                                Daftar
                            </Typography>
                            <FormControl sx={{ width: '100%', mt: 3 }} variant="outlined">
                                <Typography variant='h6' sx={{ fontSize:'1rem' }}>
                                    Nama
                                </Typography>
                                <OutlinedInput
                                    onChange={handleChange('name')}
                                    type='text'
                                    error={error.name}
                                    sx={{ borderRadius: '16px' }}
                                    placeholder='John doe'
                                />
                                <FormHelperText sx={{ color: 'red', position:'relative' }}>
                                    <Typography sx={{ fontSize: '12px', position:'absolute' }}>
                                        {error.name ? error.name : ''}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                            <FormControl sx={{ width: '100%', mt: 3 }} variant="outlined">
                                <Typography variant='h6' sx={{ fontSize:'1rem' }}>
                                    Email
                                </Typography>
                                <OutlinedInput
                                    onChange={handleChange('email')}
                                    type='email'
                                    error={error.email}
                                    sx={{ borderRadius: '16px' }}
                                    placeholder='Johndoe@gmail.com'
                                />
                                <FormHelperText sx={{ color: 'red', position:'relative' }}>
                                    <Typography sx={{ fontSize: '12px', position:'absolute' }}>
                                        {error.email ? error.email : ''}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                            <FormControl sx={{ width: '100%', mt: 3 }} variant="outlined">
                                <Typography variant='h6' sx={{ fontSize:'1rem' }}>
                                    Password
                                </Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    error={error.password}
                                    onChange={handleChange('password')}
                                    placeholder='Masukkan password'
                                    sx={{ borderRadius: '16px' }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText sx={{ color: 'red', position:'relative' }}>
                                    <Typography sx={{ fontSize: '12px', position:'absolute' }}>
                                        {error.password ? error.password : ''}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                            <Button color='primary' onMouseUp={registerValidate} variant='contained' sx={{ borderRadius: '16px', width: '100%', height: '48px', mt: 3 }}>Daftar</Button>
                            <Box display={'flex'} justifyContent={'center'} mt={{ md: 3, xs: 15 }}>
                                <Typography variant='h6'>Sudah punya akun? </Typography>
                                <Link to='/login' style={{ textDecoration:'none' }}>
                                    <Typography variant='h6' sx={{ ml: 1, fontWeight: '700', cursor: 'pointer' }} color='primary' >Login di sini</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Register