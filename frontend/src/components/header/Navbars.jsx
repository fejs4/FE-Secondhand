import { Box, Button, IconButton, Menu } from '@mui/material'
import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchField from './SearchField';
import LoginIcon from '@mui/icons-material/Login';
import Notifications from '../modals/Notifications';

const Navbars = () => {
    const [user, setUser] = React.useState('a')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isNotifOpen = Boolean(anchorEl);

    const handleNotifOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNotifClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
          PaperProps={{sx: {width: {md:'30%', xs:'100%'}}}}
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
            <Box component={'div'} height={'3rem'} display={'flex'} sx={{ px: { xs: 5, sm: 7, md: 15 }, py: 2, boxShadow: { xs: 'none', md: '0px 0px 10px rgba(0, 0, 0, 0.15)' } }} justifyContent={'space-between'} alignItems={'center'} position={{ md: 'unset', xs: 'relative' }}>
                <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={{ xs: 'space-between', sm: 'space-between', md: 'space-between' }} >
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, background: '#f5f5f5', width: '48px', height: '48px', borderRadius: '16px', justifyContent: 'center', alignContent: 'center', cursor: 'pointer' }}>
                        <MenuIcon sx={{ mt: 1.5 }} />
                    </Box>
                    <Box
                        component={'img'}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                        src='/images/Rectangle.png'
                        alt='logo-rectangle'
                    />
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <SearchField />
                    </Box>
                </Box>
                <Box>
                    <Box display={{ xs: 'block', md: 'none' }}>
                        <SearchField />
                    </Box>
                    <Box display={{ xs: 'none', md: 'flex' }} gap={3}>
                        {user ?
                            <>
                                <IconButton>
                                    <FormatListBulletedIcon sx={{ cursor: 'pointer' }} />
                                </IconButton> 
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    onClick={handleNotifOpen}
                                    color="inherit"
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
                {renderMenu}
            </Box>
        </>
    )
}

export default Navbars