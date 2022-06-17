import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import CategoryJual from '../seller/CategoryJual';
import MenuMyAkun from '../auth/MenuMyAkun';


const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: '100%',
    height: '100%'
};

const maxFile = 1

function maxFilesValidator(file) {
    if (file.length > maxFile) {
        return {
            code: "file-overload",
            message: `Error the maximum file is 4 files`
        };
    }

    return null
}

const InfoAkunSaya = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        maxFiles: 1,
        validator: maxFilesValidator,
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    })

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt='images'
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [])

    return (
        <Box width={{ md: '70%', xs: '100%' }} mx={'auto'} mt={3}>
            <Toolbar  >
                <Link to='/'>
                    <ArrowBackSharpIcon sx={{
                        display: { md: 'block', xs: 'none' }
                        , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                            backgroundColor: '#aaa',
                            opacity: [0.9, 0.8, 0.7],
                        }
                    }} />
                </Link>
                <Box display= 'flex' justifyContent= 'center' mx={'auto'} sx={{ left: 0, right: 0, top: 0 }} >
                    <Box {...getRootProps({ className: 'dropzone' })}>
                        <Box sx={{ border: '1px dashed #D0D0D0', minWidth: '96px', minHeight: '96px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                            <input {...getInputProps()} />
                            {files.length !== 0 ? '' : <AddIcon />}
                            <Box >
                                {thumbs}
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Toolbar>
            <MenuMyAkun />
        </Box>
    )
}

export default InfoAkunSaya