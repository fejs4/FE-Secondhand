import { Fab } from '@mui/material'
import React from 'react'

const PublishBuyer = ({handleOpen}) => {
    return (
        <>
            <Fab color="primary" onClick={handleOpen} aria-label="add" sx={{ position: 'fixed', width: '328px', height: '60px', borderRadius: '12px', top: '90%' }}>
                Saya tertarik ingin nego
            </Fab>
        </>
    )
}

export default PublishBuyer