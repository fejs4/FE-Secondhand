import { Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuMyAkun = () => {
    return (
        <>
            <Box mt={3} p={2}>
                <MenuList  >
                    <MenuItem sx={{ paddingLeft: '5px !important'}}>
                        <ListItemIcon>
                            <EditIcon fontSize="small" color='primary' />
                        </ListItemIcon>
                        <ListItemText>Ubah Akun</ListItemText>
                    </MenuItem>
                    <Divider sx={{ mt: '0 !important' }} />
                    <MenuItem sx={{ paddingLeft: '5px !important' }}>
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" color='primary' />
                        </ListItemIcon>
                        <ListItemText>Pengaturan Akun</ListItemText>
                    </MenuItem >
                    <Divider sx={{ mt: '0 !important' }} />
                    <MenuItem sx={{ paddingLeft: '5px !important' }}>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" color='primary' />
                        </ListItemIcon>
                        <ListItemText>Keluar</ListItemText>
                    </MenuItem>
                    <Divider sx={{ mt: '0 !important' }} />
                </MenuList>
            </Box>
        </>
    )
}

export default MenuMyAkun