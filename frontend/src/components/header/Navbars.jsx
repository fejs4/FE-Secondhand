import { Box } from '@mui/material'
import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import MenuIcon from '@mui/icons-material/Menu';
import SearchField from './SearchField';

const Navbars = () => {
    return (
        <>
            <Box component={'div'} height={'4rem'} display={'flex'} sx={{ px: {xs:5,sm:10, md:15}, py: 2 }} justifyContent={'space-between'} alignItems={'center'} position={{ xs:'relative' }}>
                <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={{ xs:'none', sm:'space-between', md:'space-between' }} minWidth={{ xs:'100%',md:'480px' }}>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, background:'#f5f5f5', width:'48px',height:'48px', borderRadius:'16px', justifyContent:'center',alignContent:'center' ,cursor:'pointer' }}>
                        <MenuIcon sx={{ mt:1.5 }}/>
                    </Box>
                    <Box
                        component={'img'}
                        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                        src='/images/Rectangle.png'
                        alt='logo-rectangle'
                    />
                    <SearchField/>
                </Box>
                <Box display={{ xs:'none', md:'flex' }} gap={3}>
                    <FormatListBulletedIcon sx={{ cursor:'pointer' }}/>
                    <NotificationsNoneOutlinedIcon sx={{ cursor:'pointer' }}/>
                    <PersonOutlineOutlinedIcon sx={{ cursor:'pointer' }}/>
                </Box>
            </Box>
        </>
    )
}   

export default Navbars