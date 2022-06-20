import { Box, Button, IconButton, Typography, Menu } from '@mui/material'
import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchField from './SearchField';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useLocation} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Notifications from '../modals/Notifications';
import Sidebar from '../sidebar/Sidebar';

const Navbars = ({ info }) => {
    const [user, setUser] = React.useState('a')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isNotifOpen = Boolean(anchorEl);
    const location = useLocation().pathname
    
    const dimension = window.innerWidth

    const handleNotifOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNotifClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
          PaperProps={{sx: {width: '30%'}}}
          sx={{ top: "50px" }}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isNotifOpen}
          onClose={handleNotifClose}
        >
            <Notifications/>
        </Menu>
      );
    return (
        <>
            <Box component={'div'} height={'3rem'} display={'flex'} sx={{ px: { xs: 5, sm: 7, md: 10, lg:15 }, py: 2, boxShadow: { xs: 'none', md: '0px 0px 10px rgba(0, 0, 0, 0.15)' } }} justifyContent={'space-between'} alignItems={'center'} position={{ md: 'unset', xs: 'relative' }}>
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
                        <Sidebar/>
                    }
                    <Link to='/' style={{ zIndex:100 }}>
                        <Box
                            component={'img'}
                            sx={{ display: { xs: 'none', md: 'block' } }}
                            src='/images/Rectangle.png'
                            alt='logo-rectangle'
                        />
                    </Link>
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
                        <Box display={{ xs: 'none', md: 'flex' }} gap={2}>
                            {user ?
                                <>
                                <Link to='/daftar-jual' style={{ textDecoration:'none' }}>
                                    <IconButton>
                                        <FormatListBulletedIcon sx={{ cursor: 'pointer', color: location === '/daftar-jual' ? '#7126B5' : 'black' }} />
                                    </IconButton> 
                                </Link>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    onClick={handleNotifOpen}
                                >
                                    <NotificationsNoneOutlinedIcon sx={{ cursor: 'pointer' }} />
                                </IconButton> 
                                <IconButton>
                                    <PersonOutlineOutlinedIcon sx={{ cursor: 'pointer' }} />
                                </IconButton> 
                            </>
                                :
                                <Button color='primary' variant='contained' sx={{ borderRadius: '12px', height: '48px', width: '105px' }}><LoginIcon sx={{ mr: 1 }} />Masuk</Button>
                            }
                        </Box>
                    </Box>
                    }
                    {renderMenu}
                        
            </Box>
        </>
    )
}

export default Navbars