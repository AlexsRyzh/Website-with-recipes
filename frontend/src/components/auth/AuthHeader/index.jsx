import styles from './styles.module.scss'
import { Typography } from '@mui/material'

export default function AuthHeader({ title, message }) {
    return (
        <>
            <Typography component={'h1'} className={styles['title']}>
                {title}
            </Typography>
            <Typography component={'p'} className={styles['message']}>
                {message}
            </Typography>
        </>
    )
}
