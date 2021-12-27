import React from 'react'

//material ui 
import { Typography } from '@mui/material'
//styles
import styles from './Title.module.css'

const Title = () => {
    return (
        <div className=''>
            <Typography variant="h2" component="div" align="center" gutterBottom >
                  Menu
             </Typography>
        </div>
    )
}

export default Title
