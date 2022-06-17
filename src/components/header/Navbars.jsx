import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchField from './SearchField';
import LoginIcon from '@mui/icons-material/Login';
import { Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbars = ({ info }) => {
    const [user, setUser] = React.useState('a')
    return (
        <>
            <Box component={'div'} height={'3rem'} display={'flex'} sx={{ px: { xs: 5, sm: 7, md: 15 }, py: 2, boxShadow: { xs: 'none', md: '0px 0px 10px rgba(0, 0, 0, 0.15)' } }} justifyContent={'space-between'} alignItems={'center'} position={{ md: 'unset', xs: 'relative' }}>
                <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={{ xs: 'space-between', sm: 'space-between', md: 'space-between' }} >
                    {info ?
                        <Box display={{ sm: 'block', md: 'none' }} zIndex={10}>
                            <Link to='/'>
                                <IconButton sx={{ padding: 0 }}>
                                    <ArrowBackIcon sx={{ fontSize: '2rem', color: 'black' }} />
                                </IconButton>
                            </Link>
                        </Box>
                        :
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, background: '#f5f5f5', width: '48px', height: '48px', borderRadius: '16px', justifyContent: 'center', alignContent: 'center', cursor: 'pointer' }}>
                            <MenuIcon sx={{ mt: 1.5 }} />
                        </Box>
                    }

                    <Box
                        component={'img'}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                        src='/images/Rectangle.png'
                        alt='logo-rectangle'
                    />
                    {info ? '' :
                        <Box display={{ xs: 'none', md: 'block' }}>
                            <SearchField />
                        </Box>
                    }
                </Box>
                {info ?
                    <Typography position='absolute' variant="h6" mx={'auto'} my={'auto'} sx={{ left: 0, right: 0, textAlign: 'center' }}>
                        {info}
                    </Typography>
                    :
                    <Box>
                        <Box display={{ xs: 'block', md: 'none' }}>
                            <SearchField />
                        </Box>
                        <Box display={{ xs: 'none', md: 'flex' }} gap={3}>
                            {user ?
                                <>
                                    <FormatListBulletedIcon sx={{ cursor: 'pointer' }} />
                                    <NotificationsNoneOutlinedIcon sx={{ cursor: 'pointer' }} />
                                    <PersonOutlineOutlinedIcon sx={{ cursor: 'pointer' }} />
                                </>
                                :
                                <Button color='primary' variant='contained' sx={{ borderRadius: '12px', height: '48px', width: '105px' }}><LoginIcon sx={{ mr: 1 }} />Masuk</Button>
                            }
                        </Box>
                    </Box>
                }
            </Box>
        </>
    )
}

export default Navbars