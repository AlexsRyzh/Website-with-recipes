import { Button } from '@mui/material'
import styles from './styles.module.scss'

export default function AuthButton({ value, ...props }) {
    return (
        <Button
            variant="contained"
            className={styles['button']}
            {...props}
        >
            {value}
        </Button>
    )
}
