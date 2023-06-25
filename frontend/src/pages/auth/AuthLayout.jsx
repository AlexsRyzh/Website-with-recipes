import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import styles from './styles.module.scss'
import Img from '../../assets/auth_img.png'

export default function AuthLayout() {
    return (
        <Box className={styles['container']}>
            <img src={Img} className={styles['img']} />
            <Box className={styles["outlet_container"]}>
                <Outlet />
            </Box>

        </Box>
    )
}
