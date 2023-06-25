import { Typography, Box } from '@mui/material'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function AuthBottomLink({ textMessage, textLink, link }) {
    return (
        <Box className={styles['container']}>
            <Typography component={'p'} className={styles['text']}>
                {textMessage}
            </Typography>
            <Link className={styles['link']} to={link}>
                {textLink}
            </Link>
        </Box>
    )
}
