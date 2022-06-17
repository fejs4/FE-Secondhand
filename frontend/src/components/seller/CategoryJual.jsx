import { Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CategoryJual = () => {
    return (
        <>
            <Box p={2} pr={0} sx={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: '16px' }}>
                <Typography variant='h6' fontWeight={600} >
                    Kategori
                </Typography>
                <MenuList  >
                    <MenuItem sx={{ paddingLeft: '5px !important'}}>
                        <ListItemIcon>
                            <ListAltIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Semua Produk</ListItemText>
                        <Typography variant="h5" color="black">
                            <ArrowForwardIosIcon />
                        </Typography>
                    </MenuItem>
                    <Divider sx={{ mt: '0 !important' }} />
                    <MenuItem sx={{ paddingLeft: '5px !important' }}>
                        <ListItemIcon>
                            <FavoriteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Diminati</ListItemText>
                        <Typography variant="h5" color="black">
                            <ArrowForwardIosIcon />
                        </Typography>
                    </MenuItem >
                    <Divider sx={{ mt: '0 !important' }} />
                    <MenuItem sx={{ paddingLeft: '5px !important' }}>
                        <ListItemIcon>
                            <MonetizationOnOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Terjual</ListItemText>
                        <Typography variant="h5" color="black">
                            <ArrowForwardIosIcon />
                        </Typography>
                    </MenuItem>

                </MenuList>
            </Box>
        </>
    )
}

export default CategoryJual