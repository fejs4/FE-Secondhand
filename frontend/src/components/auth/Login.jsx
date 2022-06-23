import { Box, Grid, Typography, Button, FormHelperText } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import { loginValidation } from '../../validator/validator'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from '../../redux/auth';

const Login = () => {
    // Login
    const [error, setError] = React.useState({});
    const [values, setValues] = React.useState({
        password: '',
        email: '',
        showPassword: false,
        success: false,
        message: ''
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()
        // if (error.email !== '' || error.password !== '') {
        //     setValues({ ...values, message: 'Gagal login, lengkapi data', success: false })
        // } else {
            try {
                const user = {
                    email: values.email,
                    password: values.password
                }
                const getData = await axios(
                    {
                        method:"POST",
                        data:user,
                        url:"http://localhost:5000/login"
                    }).then(
                    data => {
                        localStorage.setItem("token", data.data.data.test.access_token)
                        setValues({ ...values, message: data.data.message, success: data.data.success })
                        dispatch(setUserLogin({id: data.data.data.test.id,email: data.data.data.test.email }))
                        setTimeout(() => {
                            window.location.reload()
                        }, 2000);
                    }
                )
            } catch (error) {
                console.log(error);
            }
        // }
    }

    const loginValidate = (e) => {
        e.preventDefault()
        loginValidation(values, setError)
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

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
                    <img src="/images/img.png" alt="brand" style={{ minHeight: '100%', width: '100%', objectFit: 'cover' }} />
                </Grid>
                <Grid container item xs={12} sm={12} md={6} height={'100%'} direction={'column'} justifyContent={{ xl: 'center', md: 'center', sm: 'none' }} sx={{ px: { xl: 20, md: 10, sm: 10, xs: 5 } }}>
                    <Box component={'div'}>
                        <Box component={'div'} display={{ sm: 'block', md: 'none' }} mt={{ sm: 5, xs: 5 }}>
                            <Link to={-1}>
                                <IconButton sx={{ padding: 0 }}>
                                    <ArrowBackIcon sx={{ fontSize: '2rem', color: 'black' }} />
                                </IconButton>
                            </Link>
                        </Box>
                        <Box component={'div'} mt={{ sm: 5, xs: 5 }}>
                            <Box component={'div'} display={'flex'} justifyContent={'space-between'} gap={3}>
                                <Typography component={'h4'} variant='h4' fontWeight={700}>
                                    Masuk
                                </Typography>
                                {values.message ?
                                    <Stack sx={{ width: '100%' }} spacing={2}>
                                        <Alert severity={values.success ? 'success' : 'error'}> {values.message} </Alert>
                                    </Stack>
                                    :
                                    ""
                                }
                            </Box>
                            <FormControl sx={{ width: '100%', mt: 2 }} variant="outlined">
                                <Typography component={'h6'} variant='h6' sx={{ fontSize: '1rem' }}>
                                    Email
                                </Typography>
                                <OutlinedInput
                                    onChange={handleChange('email')}
                                    type='email'
                                    error={error.email}
                                    sx={{ borderRadius: '16px' }}
                                    placeholder='Johndoe@gmail.com'
                                />
                                <FormHelperText sx={{ color: 'red', position: 'relative' }}>
                                    <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                                        {error.email ? error.email : ''}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                            <FormControl sx={{ width: '100%', mt: 2 }} variant="outlined">
                                <Typography component={'h6'} variant='h6' sx={{ fontSize: '1rem' }}>
                                    Password
                                </Typography>
                                <OutlinedInput
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    error={error.password}
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
                                <FormHelperText sx={{ color: 'red', position: 'relative' }}>
                                    <Typography variant='p' sx={{ fontSize: '12px', position: 'absolute' }}>
                                        {error.password ? error.password : ''}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ borderRadius: '16px', width: '100%', height: '48px', mt: 3 }}
                                onMouseUp={loginValidate}
                                onClick={handleLogin}
                            >Masuk
                            </Button>
                            <Box display={'flex'} justifyContent={'center'} mt={3}>
                                <Typography variant='h6'>Belum punya akun? </Typography>
                                <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <Typography variant='h6' sx={{ ml: 1, fontWeight: '700', cursor: 'pointer' }} color='primary' >Daftar di sini</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login